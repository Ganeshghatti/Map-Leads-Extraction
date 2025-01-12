const express = require("express");
const {
  MapExtract
} = require("../controller/MapExtract/MapExtract");
const requireAuth = require("../middleware/Admin");
const router = express.Router();

router.route("/mapextract/new").post(requireAuth, MapExtract);

module.exports = router;

