const express = require("express");
const { SendOutreach } = require("../controller/Outreach/Outreach");
const requireAuth = require("../middleware/Admin");
const router = express.Router();

router.route("/outreach/send/:id").post(requireAuth, SendOutreach);

module.exports = router; 