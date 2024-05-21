const mongoose=require("mongoose");
const Schema=mongoose.Schema
const classSchema = new Schema({
  name: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
