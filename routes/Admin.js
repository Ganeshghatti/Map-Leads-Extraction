const express = require("express");
const { AdminLogin } = require("../controller/Admin/Auth");
const router = express.Router();

router.route("/admin/login").post(AdminLogin);

module.exports = router;