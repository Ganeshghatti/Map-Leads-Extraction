const Leads = require("../../models/Leads");
const LeadCollection = require("../../models/LeadCollection");
const transporter = require("../../config/email");
const getOutreachTemplate = require("../../utils/mail/OutreachTemplate");

exports.SendOutreach = async (req, res, next) => {
  const { subject, optionalBody } = req.body;
  const { id } = req.params;

  if (!id || !subject) {
    return res.status(400).json({ 
      success: false,
      message: "Collection ID and subject are required" 
    });
  }

  try {
    // Get all leads from the collection
    const leads = await Leads.find({ 
      leadCollectionId: id,
      email: { $exists: true, $ne: [] } // Only get leads with emails
    });

    if (!leads.length) {
      return res.status(404).json({
        success: false,
        message: "No leads with emails found in this collection"
      });
    }

    // Save outreach details to collection
    await LeadCollection.findByIdAndUpdate(id, {
      $push: {
        outreach: {
          datetime: new Date(),
          subject: subject,
          body: optionalBody || ""
        }
      }
    });

    // Send emails to all email addresses for each lead
    const emailPromises = leads.flatMap(lead => {
      if (!lead.email || lead.email.length === 0) return [];

      const emailTemplate = getOutreachTemplate(lead.title, optionalBody);

      return lead.email.map(async (emailAddress) => {
        try {
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: emailAddress,
            subject: subject,
            html: emailTemplate
          });
          return { success: true, leadId: lead._id, email: emailAddress };
        } catch (error) {
          console.error(`Error sending email to ${emailAddress}:`, error);
          return { success: false, leadId: lead._id, email: emailAddress, error: error.message };
        }
      });
    });

    const results = await Promise.all(emailPromises);

    const successCount = results.filter(r => r && r.success).length;
    const failureCount = results.filter(r => r && !r.success).length;

    res.status(200).json({
      success: true,
      message: "Outreach campaign completed",
      stats: {
        totalProcessed: results.length,
        successful: successCount,
        failed: failureCount
      }
    });

  } catch (error) {
    console.error("Error during outreach:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message
      }
    });
  }
};
