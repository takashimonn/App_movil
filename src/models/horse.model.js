// const mongoose = require('mongoose');

// const horseSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   age: {
//     type: String,
//     required: true,
//   },

//   breed: {
//     type: String,
//     required: true,
//   },

//   diseases: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("Horse", horseSchema);

import mongoose from "mongoose";

const horseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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
  sensor: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Horse", horseSchema);