const express = require('express');
const userSchema = require('../models/user.model');

const router = express.Router();

// create user
router.post('/user', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all users
router.get('/user', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get a user
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update user
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const {username, name, email, password} = req.body;
    userSchema
    .updateOne({_id:id}, { $set: {username, name, email, password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Delete user
router.delete('/user/:id', (req, res) => {
    const {id} = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;