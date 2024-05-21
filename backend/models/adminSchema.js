const mongoose=require("mongoose");
const Schema=mongoose.Schema

const adminSchema = new Schema({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  permissions: [{ type: String }] // Example: ['manage_users', 'edit_classes', etc.]
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
