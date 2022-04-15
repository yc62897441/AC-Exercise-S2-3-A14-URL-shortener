const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlRecord = new Schema({
  longURL: {
    type: String,
    require: true
  },
  shortURL: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('urlRecord', urlRecord)
