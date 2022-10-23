const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const relation = new mongoose.relation({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  favoriteGenre: {
    type: String,
    required: true,
  },
})

relation.plugin(uniqueValidator)
module.exports = mongoose.model('User', relation)