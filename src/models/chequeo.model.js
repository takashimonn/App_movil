const mongoose = require('mongoose');

const checkSchema = new mongoose.Schema({
    namehorse: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    medicines: {
        type: String, 
        require: true, 
    },
    specifications: {
        type: String, 
        require: true, 
    }, 
    food: {
        type: String, 
        require: true,  
    }, 
    horseshoes: {
        type: String, 
        require: true,
    },
    job: {
        type: String, 
        require: true,
    },
});

module.exports = mongoose.model("check", checkSchema);