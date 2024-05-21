const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class' },
  assignments: [{ type: Schema.Types.ObjectId, ref: 'Assignment' }]
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
