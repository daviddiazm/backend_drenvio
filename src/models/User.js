const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  isSpecialUser: {
    type: Boolean
  },
  email: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'productos'
    }
  ]
})

module.exports = mongoose.model('User', UserSchema, 'preciosEspecialesDiaz18')