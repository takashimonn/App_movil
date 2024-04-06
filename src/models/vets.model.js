const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
  
    lastName: {
      type: String,
      required: true,
    },
  
    age: {
      type: String,
      required: true,
    },
  
    email: {
      type: String,
      required: true,
      unique: true,
    },
  
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  });

  module.exports = mongoose.model("vets", vetSchema);