const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user.route');
const horseRoute = require('./routes/horse.route');
const VetsRoute = require('./routes/vets.route');
const checkRoute = require('./routes/chequeo.route');
const cors = require('cors');
 

const app = express();
const port = 3000;

app.use(
    cors({
        origin: "http://localhost:8081",
        credentials: true,
    })
)

// middleware
app.use(express.json());
app.use('/api', userRoute);
app.use('/api', horseRoute);
app.use('/api', VetsRoute);
app.use('/api', checkRoute);


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('La base de datos se ha conectado correctamente'))
.catch ((error) => console.error(error));

app.listen(port, () => console.log('El servidor está escuchando en el puerto', port));
