const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  genre: {
    type: String,
    enum: ['комедия', 'драма', 'боевик', 'триллер', 'документальный'],
    required: true
  }
});

module.exports = mongoose.model('film', filmSchema);
