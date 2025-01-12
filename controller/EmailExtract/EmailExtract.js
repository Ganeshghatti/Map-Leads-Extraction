const Leads = require("../../models/Leads");
const LeadCollection = require("../../models/LeadCollection");
const puppeteer = require("puppeteer");
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.EmailExtract = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Collection id is required" });
  }

  try {
    const leads = await Leads.find({ leadCollectionId: id });
    let domains = leads.map((lead) => ({ _id: lead._id, website: lead.website }))
      .filter(domain => domain.website && domain.website !== 'N/A');
    domains=domains.slice(0, 10);

    res.status(200).json({
      success: true,
      message: "Batch processing started",
      domainsCount: domains.length,
    });

    const batchSize = 5;
    const batches = [];

    for (let i = 0; i < domains.length; i += batchSize) {
      batches.push(domains.slice(i, i + batchSize));
    }

    // Process each batch
    for (let [batchIndex, batch] of batches.entries()) {
      console.log(`Processing batch ${batchIndex + 1} of ${batches.length}`);

      // Process domains in current batch concurrently
      await Promise.all(
        batch.map(async ({ _id, website }) => {
          try {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            const allEmails = new Set();

            const emailRegex = /[a-zA-Z0-9._%+\-!#$&'*/=?^`{|}~]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?/g;

            // Scrape homepage
            await page.goto(website, {
              waitUntil: "networkidle2",
              timeout: 30000,
            });
            await page.waitForNetworkIdle(5000);

            const content = await page.content();
            const pageText = await page.evaluate(() => document.body.innerText);
            const foundEmails = content.match(emailRegex) || [];
            foundEmails.forEach((email) => allEmails.add(email));

            // Get company description from Gemini
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const descriptionPrompt = `Based on this website content, write 2-3 clear, concise descriptions (2-3 sentences each) about the company/website. Focus on their main business, value proposition, and unique features. Content: ${pageText.substring(0, 2000)}`;

            const descriptionResult = await model.generateContent(descriptionPrompt);
            const companyDescriptions = descriptionResult.response.text();

            // Get internal links
            const allLinks = await page.evaluate(() => {
              const links = [];
              const currentHost = window.location.hostname;

              document.querySelectorAll("a").forEach((link) => {
                try {
                  const href = link.href;
                  if (!href) return;
                  const url = new URL(href);
                  if (url.hostname === currentHost && href.startsWith("http")) {
                    links.push(href);
                  }
                } catch (e) {}
              });
              return links;
            });

            // Determine pages to scrape
            let urlsToScrape = [];
            if (allLinks.length <= 3) {
              urlsToScrape = allLinks.map((link) => link.href);
              console.log(
                `Using all ${urlsToScrape.length} links for scraping`
              );
            } else {
              const linksPrompt = `Analyze these URLs and return exactly 3 URLs that are most likely to contain email addresses. Focus on pages like 'Contact', 'About', 'Team', etc.
            Input URLs: ${JSON.stringify(allLinks)}
            Return ONLY a JSON array of strings, nothing else. Example: ["https://example.com/contact","https://example.com/about","https://example.com/team"]`;

              const linksResult = await model.generateContent(linksPrompt);
              const response = linksResult.response.text();
              try {
                const cleanedResponse = response.replace(/```json\n?|\n?```/g, "").trim();
                urlsToScrape = JSON.parse(cleanedResponse);
                console.log(`Selected URLs for scraping: ${urlsToScrape.length}`);
              } catch (error) {
                console.error("Error parsing URLs from Gemini:", error);
                // Fallback to first 3 URLs if parsing fails
                urlsToScrape = allLinks.slice(0, 3);
                console.log(`Fallback: Using first 3 URLs for scraping`);
              }
            }

            // Scrape additional pages
            for (const url of urlsToScrape) {
              try {
                await page.goto(url, {
                  waitUntil: "networkidle2",
                  timeout: 30000,
                });
                await page.waitForNetworkIdle(5000);
                const pageContent = await page.content();
                const pageEmails = pageContent.match(emailRegex) || [];
                pageEmails.forEach((email) => allEmails.add(email));
              } catch (error) {
                console.error(`Error scraping ${url}:`, error);
              }
            }

            await browser.close();

            // Filter and validate emails
            const validEmails = Array.from(allEmails).filter((email) => {
              return (
                email.includes("@") &&
                email.includes(".") &&
                email.length > 4 &&
                !email.includes("..") &&
                !email.startsWith(".") &&
                !email.endsWith(".") &&
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              );
            });

            // Update the lead document with emails and description
            await Leads.findByIdAndUpdate(_id, {
              email: validEmails,
              description: companyDescriptions
            });

          } catch (error) {
            console.error(`Error processing ${website}:`, error);
          }
        })
      );

      // Wait before processing next batch (if not the last batch)
      if (batchIndex < batches.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 60000));
      }
    }
  } catch (error) {
    console.log("Error during email extraction:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};
