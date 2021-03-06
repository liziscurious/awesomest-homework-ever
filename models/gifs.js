const mongoose = require('mongoose');

const gifSchema = mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Gif', gifSchema);
