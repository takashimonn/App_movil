const mongoose = require('mongoose');

const PsicologoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  especialidad: {
    type: String,
    required: true,
  },
  correo_electronico: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  constrasena: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("Psicologo", PsicologoSchema);