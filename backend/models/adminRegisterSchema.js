const mongoose = require("mongoose");
const validator = require("validator");
const adminRegisterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminRegisterSchema);
module.exports = Admin;
