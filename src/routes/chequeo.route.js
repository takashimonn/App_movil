const express = require('express');
const userSchema = require('../models/chequeo.model');

const router = express.Router();

// Middleware para registrar todas las solicitudes que llegan al servidor
router.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.originalUrl}`);
    next();
});

// Create a new check
router.post('/checks', (req, res) => {
    const { namehorse, medicines, specifications, food, horseshoes, job } = req.body;
    const user = new userSchema({ namehorse, medicines, specifications, food, horseshoes, job });
    user.save()
    .then((data) => {
        console.log('Nuevo chequeo creado:', data);
        res.json(data);
    })
    .catch((error) => {
        console.error('Error al crear un nuevo chequeo:', error);
        res.json({ message: error });
    });
});

// Get all checks
router.get('/checks', (req, res) => {
    userSchema
    .find()
    .then((data) => {
        console.log('Chequeos encontrados:', data);
        res.json(data);
    })
    .catch((error) => {
        console.error('Error al obtener todos los chequeos:', error);
        res.json({ message: error });
    });
});

// Get checks by horse name
router.get('/checks/:namehorse', (req, res) => {
    const { namehorse } = req.params;
    userSchema
    .find({ namehorse: namehorse })
    .then((data) => {
        console.log(`Chequeos encontrados para el caballo ${namehorse}:`, data);
        res.json(data);
    })
    .catch((error) => {
        console.error(`Error al obtener los chequeos para el caballo ${namehorse}:`, error);
        res.json({ message: error });
    });
});

// Get a check
router.get('/checks/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => {
        console.log('Chequeo encontrado:', data);
        res.json(data);
    })
    .catch((error) => {
        console.error('Error al obtener el chequeo:', error);
        res.json({ message: error });
    });
});

// Update check
router.put('/checks/:id', (req, res) => {
    const { id } = req.params;
    const { namehorse, medicines, specifications, food, horseshoes, job } = req.body;
    userSchema
    .updateOne({_id:id}, { $set: {namehorse, medicines, specifications, food, horseshoes, job}})
    .then((data) => {
        console.log('Chequeo actualizado:', data);
        res.json(data);
    })
    .catch((error) => {
        console.error('Error al actualizar el chequeo:', error);
        res.json({ message: error });
    });
});

// Delete check
router.delete('/checks/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => {
        console.log('Chequeo eliminado:', data);
        res.json(data);
    })
    .catch((error) => {
        console.error('Error al eliminar el chequeo:', error);
        res.json({ message: error });
    });
});

module.exports = router;

