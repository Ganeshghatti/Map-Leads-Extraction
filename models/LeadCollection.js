const mongoose = require("mongoose");

const leadCollectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  outreach: {
    type: [{
        datetime: {
          type: Date,
          required: true,
        },
        subject: {
          type: String,
          required: true,
        },
        body: {
          type: String,
          required: true,
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LeadCollection = mongoose.model("LeadCollection", leadCollectionSchema);

module.exports = LeadCollection;
