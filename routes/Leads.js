const express = require("express");
const requireAuth = require("../middleware/Admin");
const { 
  DeleteLead, 
  EditLead,
  AddLeadToCollection 
} = require("../controller/Leads/Leads");
const router = express.Router();

router.route("/lead/delete/:id").delete(requireAuth, DeleteLead);
router.route("/lead/edit/:id").put(requireAuth, EditLead);
router.route("/lead/collection/:collectionId").post(requireAuth, AddLeadToCollection);

module.exports = router;
