const mongoose = require('mongoose');

const paramsSchema = new mongoose.Schema({
  nivel_luz: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  bpm: {
    type: String,
    required: true,
  },

  conteo_pasos: {
    type: String,
    required: true,
  },

  id_sensor: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("Parameter", paramsSchema);