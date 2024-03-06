const express = require('express');

const router = express.Router();

router.post('/user', (req, res) => {
    res.send("usuario creado");
});

module.exports = router;