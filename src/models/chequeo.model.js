const mongoose = require('mongoose');

const checkSchema = new mongoose.Schema({
    horseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Horse', // Nombre del modelo de caballo
        required: true
    },
    medicines: {
        type: String, 
        required: true, 
    },
    specifications: {
        type: String, 
        required: true, 
    }, 
    food: {
        type: String, 
        required: true,  
    }, 
    horseshoes: {
        type: String, 
        required: true,
    },
    job: {
        type: String, 
        required: true,
    },
});

module.exports = mongoose.model("Check", checkSchema);

