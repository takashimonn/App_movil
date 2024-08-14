const mongoose = require('mongoose');

const CitasSchema = new mongoose.Schema({
  fecha_cita: {
    type: Date,
    required: true,
  },
  hora_cita: {
    type: String,
    required: true,
  },
  tipo_cita: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  }
});

module.export = mongoose.model("Citas", CitasSchema);