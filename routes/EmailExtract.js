const express = require("express");
const { EmailExtract } = require("../controller/EmailExtract/EmailExtract");
const router = express.Router();
const requireAuth  = require("../middleware/Admin");

router.route("/emailextract/collection/:id").post(requireAuth, EmailExtract);

module.exports = router;