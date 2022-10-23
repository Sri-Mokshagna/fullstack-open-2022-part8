const mongoose = require('mongoose')

const relation = new mongoose.relation({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 2
  },
  published: {
    type: Number,
  },
  author: {
    type: mongoose.relation.Types.ObjectId,
    ref: 'Author'
  },
  genres: [
    { type: String}
  ]
})

module.exports = mongoose.model('Book', relation)