const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user.route');
const horseRoute = require('./routes/horse.route');
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


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('si se conecto la bd we'))
.catch ((error) => console.error(error));

app.listen(port, () => console.log('El servidor está escuchando en el puerto', port));
