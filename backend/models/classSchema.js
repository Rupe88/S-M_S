const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: true,
  },
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
