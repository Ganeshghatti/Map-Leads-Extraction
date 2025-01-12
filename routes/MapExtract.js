const express = require("express");
const {
  Mapextract
} = require("../controller/Mapextract/Mapextract");
const requireAuth = require("../middleware/Admin");
const router = express.Router();

router.route("/mapextract/new").post(requireAuth, Mapextract);

module.exports = router;

