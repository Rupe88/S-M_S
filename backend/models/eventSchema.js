const mongoose = require("mongoose");
const eventSchema = new mongoose.model({
  events: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
