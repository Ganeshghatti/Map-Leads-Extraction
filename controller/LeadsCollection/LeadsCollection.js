const Leads = require("../../models/Leads");
const LeadCollection = require("../../models/LeadCollection");

exports.AllCollection = async (req, res, next) => {
  try {
    const leadCollection = await LeadCollection.find();
    res.status(200).json({
      success: true,
      message: "Leads fetched successfully",
      leadCollection,
    });
  } catch (error) {
    console.log("Error during fetching collection:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

exports.LeadsDetails = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Collection id is required" });
  }
  try {
    const leads = await Leads.find({ leadCollectionId: id });
    res.status(200).json({
      success: true,
      message: "Leads fetched successfully",
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.log("Error during fetching collection:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

exports.CreateCollection = async (req, res, next) => {
  const { title, description, category, location } = req.body;
  console.log(req.body);
  if (!title) {
    return res.status(400).json({ 
      success: false,
      message: "Title is required" 
    });
  }

  try {
    const leadCollection = new LeadCollection({
      title,
      description,
      category,
      location,
      createdAt: new Date()
    });
    await leadCollection.save();

    res.status(201).json({
      success: true,
      message: "Lead collection created successfully",
      leadCollection
    });
  } catch (error) {
    console.log("Error creating collection:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message
      }
    });
  }
};

exports.DeleteCollection = async (req, res, next) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ 
      success: false,
      message: "Collection ID is required" 
    });
  }

  try {
    // Delete all leads in the collection
    await Leads.deleteMany({ leadCollectionId: id });
    
    // Delete the collection
    const deletedCollection = await LeadCollection.findByIdAndDelete(id);
    
    if (!deletedCollection) {
      return res.status(404).json({
        success: false,
        message: "Collection not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Collection and associated leads deleted successfully"
    });
  } catch (error) {
    console.log("Error deleting collection:", error);
    res.status(500).json({
      success: false,
      error: {
        message: error.message
      }
    });
  }
};
