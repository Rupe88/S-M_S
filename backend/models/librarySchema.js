const mongoose=require("mongoose");
const Schema=mongoose.Schema
const librarySchema = new Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  availableCopies: { type: Number, required: true },
  borrowedBy: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
}, { timestamps: true });

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;
