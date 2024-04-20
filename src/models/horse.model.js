const mongoose = require('mongoose');

const horseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
  },

  breed: {
    type: String,
    required: true,
  },

  diseases: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,  // Almacenará la ruta de la imagen
    required: true,
  },
});

module.exports = mongoose.model("Horse", horseSchema);