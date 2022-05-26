const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  shortadd: {
    type: String
  }
})

module.exports = mongoose.model('Address', addressSchema)
