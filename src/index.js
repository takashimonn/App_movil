const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require('./routes/user.route');

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use('/api', userRoute);


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('si se conecto la bd we'))
.catch ((error) => console.error(error));

app.listen(port, () => console.log('El servidor está escuchando en el puerto', port));
