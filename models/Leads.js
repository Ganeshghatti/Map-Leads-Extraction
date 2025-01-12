const mongoose = require("mongoose");

const leadsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  phone: {
    type: [String],
  },
  email: {
    type: [String],
  },
  website: {
    type: String,
  },
  address: {
    type: String,
  },
  maplink: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
  },
  leadCollectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LeadCollection",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Leads = mongoose.model("Leads", leadsSchema);

module.exports = Leads;
