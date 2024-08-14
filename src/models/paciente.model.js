const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: Date,
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
  direccion: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  tarifa: {
    type: Number,
    required: true,
  },
  nombre_emergencia: {
    type: String,
    required: true,
  },
  contacto_emergencia: {
    type: String,
    required: true,
  },
  estado_civil: {
    type: String,
    required: true,
  },
  ocupacion: {
    type: String,
    required: true,
  },
  fecha_registro: {
    type: Date,
    required: true,
  }
});

module.export = mongoose.model("Paciente", PacienteSchema);