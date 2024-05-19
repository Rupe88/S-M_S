const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true, 
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"], 
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Define models and export them
const AdminLogin = mongoose.model('Admin Login', userSchema);
const Student = mongoose.model('Student Login', userSchema);
const Teacher = mongoose.model('Teacher Login', userSchema);

module.exports = { AdminLogin, Student, Teacher }; // Export all models together
