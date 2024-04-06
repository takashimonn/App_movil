const express = require('express');
const userSchema = require('../models/vets.model');

const router = express.Router();

// Create a new vet
router.post('/vets', (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all vets
router.get('/vets', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a vet
router.get('/vets/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update vet
router.put('/vets/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, email, phone} = req.body;
    userSchema
    .updateOne({_id:id}, { $set: {firstName, lastName, age, email, phone}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete vet
router.delete('/vets/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;