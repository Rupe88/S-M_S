const mongoose=require("mongoose");
const Schema=mongoose.Schema
const announcementSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  class: { type: Schema.Types.ObjectId, ref: 'Class' }
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
