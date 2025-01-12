const Leads = require("../../models/Leads");

exports.DeleteLead = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Collection id is required" });
  }
  try {
    const lead = await Leads.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Leads deleted successfully",
      lead,
    });
  } catch (error) {
    console.log("Error during deleting Leads:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

exports.EditLead = async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;
  
  if (!id) {
    return res.status(400).json({ 
      success: false,
      message: "Lead ID is required" 
    });
  }

  try {
    const lead = await Leads.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      lead
    });
  } catch (error) {
    console.log("Error updating lead:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message
      }
    });
  }
};

exports.AddLeadToCollection = async (req, res, next) => {
  const { collectionId } = req.params;
  const { title, description, phone, email, website, address, maplink } = req.body;

  if (!collectionId || !title) {
    return res.status(400).json({ 
      success: false,
      message: "Collection ID and title are required" 
    });
  }

  try {
    const lead = new Leads({
      title,
      description,
      phone: Array.isArray(phone) ? phone : phone ? [phone] : [],
      email: Array.isArray(email) ? email : email ? [email] : [],
      website,
      address,
      maplink,
      leadCollectionId: collectionId,
      createdAt: new Date()
    });

    await lead.save();

    res.status(201).json({
      success: true,
      message: "Lead added to collection successfully",
      lead
    });
  } catch (error) {
    console.log("Error adding lead to collection:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message
      }
    });
  }
};
