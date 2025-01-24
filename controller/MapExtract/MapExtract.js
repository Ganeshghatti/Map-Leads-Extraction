const Leads = require("../../models/Leads");
const LeadCollection = require("../../models/LeadCollection");
const puppeteer = require("puppeteer");

exports.MapExtract = async (req, res, next) => {
  const { location, category, title, description } = req.body;

  if (!location || !category || !title) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const url = `https://www.google.com/maps?hl=en`;
    
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
      args: [
        "--window-size=1920,1080",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    const searchQuery = `${category} in ${location}`;
    await page.waitForSelector("#searchboxinput", { visible: true });
    await page.type("#searchboxinput", searchQuery);
    await page.click("#searchbox-searchbutton");

    await page.waitForSelector(".m6QErb.DxyBCb.kA9KIf.dS8AEf", {
      visible: true,
    });

    await page.waitForSelector(
      '.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd[role="feed"]',
      { visible: true }
    );

    // First get the scroll height and log it
    const scrollableHeight = await page.evaluate(() => {
      const scrollableDiv = document.querySelector(
        '.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd[role="feed"]'
      );
      console.log("Scrollable div height:", scrollableDiv.scrollHeight);
      return scrollableDiv.scrollHeight;
    });

    // Scroll to the bottom
    await page.evaluate(async () => {
      const scrollableDiv = document.querySelector(
        '.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd[role="feed"]'
      );

      // Scroll in small steps to trigger loading of more results
      const scrollStep = 300;
      let lastHeight = scrollableDiv.scrollHeight;
      let attempts = 0;
      const maxAttempts = 20; // Prevent infinite loops

      while (attempts < maxAttempts) {
        scrollableDiv.scrollTo(0, scrollableDiv.scrollHeight);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Increased wait time

        if (scrollableDiv.scrollHeight === lastHeight) {
          attempts++;
        } else {
          attempts = 0; // Reset attempts if we find new content
        }

        lastHeight = scrollableDiv.scrollHeight;
      }
    });

    // Now get results after scrolling
    const results = await page.evaluate(() => {
      const businesses = [];
      const items = document.querySelectorAll(
        '.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd[role="feed"] .Nv2PK'
      );

      items.forEach((item) => {
        const name =
          item.querySelector(".qBF1Pd.fontHeadlineSmall")?.textContent || "N/A";
        const link = item.querySelector("a.hfpxzc")?.href || "N/A";
        const ratingStars = item.querySelector(".MW4etd")?.textContent || "N/A";
        const numberOfRatings =
          item.querySelector(".UY7F9")?.textContent || "N/A";
        const phone = item.querySelector(".UsdlK")?.textContent || "N/A";
        const temporarilyClosedText =
          item.querySelector(".eXlrNe")?.textContent || "N/A";
        const temporarilyClosed =
          temporarilyClosedText.includes("Temporarily closed");

        const categoryandaddressParentDiv =
          item.querySelectorAll(".UaQhfb .W4Efsd");

        // Extract children details
        const children2 = Array.from(
          categoryandaddressParentDiv[2]?.children || []
        ).map((child) => child.textContent.trim());

        // Extract category and address from children2
        const category = children2[0] || "N/A";
        const address = (children2[1] || "") + (children2[2] || "");

        const website = item.querySelector("a.lcr4fd")?.href || "N/A";

        businesses.push({
          name,
          link,
          ratingStars,
          numberOfRatings,
          phone,
          temporarilyClosed,
          category: category.replace(/ · /g, "").trim(),
          address: address.replace(/ · /g, "").replace(/·/g, "").trim(),
          website,
        });
      });

      return businesses;
    });

    await browser.close();
    console.log("Got scraped data");

    const leadCollection = new LeadCollection({
      location,
      category,
      title,
      description,
      createdAt: new Date(),
    });
    await leadCollection.save();

    for (const business of results) {
      const lead = new Leads({
        title: business.name,
        description: business.description || "",
        phone: [business.phone],
        email: [],
        website: business.website || "",
        address: business.address || "",
        maplink: business.link,
        rating: parseFloat(business.ratingStars) || 0,
        numOfReviews: parseInt(business.numberOfRatings) || 0,
        leadCollectionId: leadCollection._id,
        createdAt: new Date(),
      });
      await lead.save();
    }

    res.status(200).json({
      success: true,
      message: "Leads extracted successfully",
      leadCollection,
      leads: results,
    });
  } catch (error) {
    console.log("Error during map extraction:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};
