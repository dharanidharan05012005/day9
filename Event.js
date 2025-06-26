const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: String,
  date: String,
  tasks: [String]
});

module.exports = mongoose.model('Event', eventSchema);
 