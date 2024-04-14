const express = require('express');
const userSchema = require('../models/chequeo.model');

const router = express.Router();


// Create a new check
router.post('/checks', (req, res) => {
    const { namehorse, medicines, specifications, food, horseshoes, job } = req.body;
    const user = new userSchema({ namehorse, medicines, specifications, food, horseshoes, job });
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


// Get all checks
router.get('/checks', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a check
router.get('/checks/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update check
router.put('/checks/:id', (req, res) => {
    const { id } = req.params;
    const { namehorse, medicines, specifications, food, horseshoes, job } = req.body;
    userSchema
    .updateOne({_id:id}, { $set: {namehorse, medicines, specifications, food, horseshoes, job}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete checck
router.delete('/checks/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


