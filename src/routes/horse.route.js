const express = require('express');
const userSchema = require('../models/horse.model');

const router = express.Router();

// create new horse 
router.post('/horse', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// Get horse ID by name
router.get('/horse/name/:name', (req, res) => {
    const { name } = req.params;
    userSchema
    .findOne({ name: name })
    .then((data) => {
        if (!data) {
            return res.status(404).json({ message: "Horse not found" });
        }
        res.json({ id: data._id });
    })
    .catch((error) => res.status(500).json({ message: error }));
});


// Get all horses
router.get('/horse', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//  Get a horse
router.get('/horse/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update user
router.put('/horse/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, breed, diseases, user} = req.body;
    userSchema
    .updateOne({_id:id}, { $set: { name, age, breed, diseases, user}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete horse
router.delete('/horse/:id', (req, res) => {
    const {id} = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;