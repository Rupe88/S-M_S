const mongoose=require("mongoose");
const Schema=mongoose.Schema
const teacherSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
