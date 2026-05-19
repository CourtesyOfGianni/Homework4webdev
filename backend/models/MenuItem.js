const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  desc:     { type: String, required: true },
  price:    { type: Number, required: true },
  category: { type: String, required: true, enum: ['japanese', 'guyanese', 'fusion', 'spanish'] }
})

module.exports = mongoose.model('MenuItem', menuItemSchema)
