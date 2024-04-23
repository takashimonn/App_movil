const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userSchema = require('../models/user.model');

const router = express.Router();

// Middleware para verificar el token
function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({ message: 'Token no proporcionado' });

    jwt.verify(token, 'secreto', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido' });
        req.userId = decoded.id;
        next();
    });
}

// Ruta para iniciar sesión y generar un token
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        
        const token = jwt.sign({ id: user._id }, 'secreto', {
            expiresIn: 86400 // 24 horas
        });

        const userData = {
            id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            typeUser: user.typeUser
        };
        
        res.json({ token, userData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// create user
router.post('/user', async (req, res) => {
    const { username, name, email, password } = req.body;
    
    try {
        // Encriptar la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear un nuevo usuario con la contraseña encriptada
        const newUser = new userSchema({
            username,
            name,
            email,
            password: hashedPassword // Guardar la contraseña encriptada en la base de datos
        });
        
        // Guardar el nuevo usuario en la base de datos
        const savedUser = await newUser.save();
        
        res.json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rutas protegidas con autenticación de token
router.use(verifyToken);

// Get all users
router.get('/user', (req, res) => {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error }));
});

// Get a user
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error }));
});

// Update user
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { username, name, email, password } = req.body;
    userSchema.updateOne({ _id: id }, { $set: { username, name, email, password } })
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error }));
});

// Delete user
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error }));
});

module.exports = router;
