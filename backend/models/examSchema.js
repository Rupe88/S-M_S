const mongoose=require("mongoose");
const Schema=mongoose.Schema
const examSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
}, { timestamps: true });

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
