const mongoose = require("mongoose");
const User = require("../models/User");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

const createAdmin = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("admin", salt);
  const admin = new User({
    email: "info@thesquirrel.site",
    password: hashedPassword,
    role: "admin",
    username: "ganesh",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(admin);

  await admin.save();
  console.log("Admin created successfully");
};

createAdmin();
