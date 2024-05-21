const mongoose=require("mongoose");
const Schema=mongoose.Schema

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
