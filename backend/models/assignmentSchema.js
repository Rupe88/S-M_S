const mongoose=require("mongoose");
const Schema=mongoose.Schema

const assignmentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date, required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class' },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;
