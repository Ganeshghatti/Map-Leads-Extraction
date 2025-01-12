const express = require("express");
const requireAuth = require("../middleware/Admin");
const {
  LeadsDetails,
  AllCollection,
  CreateCollection,
  DeleteCollection
} = require("../controller/LeadsCollection/LeadsCollection");
const router = express.Router();

router.route("/leadcollection/all").get(requireAuth, AllCollection);
router.route("/leadcollection/:id").get(requireAuth, LeadsDetails);
router.route("/leadcollection/create").post(requireAuth, CreateCollection);
router.route("/leadcollection/delete/:id").delete(requireAuth, DeleteCollection);

module.exports = router;
