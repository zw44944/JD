const data = require('./data')
const express = require('express');
const router = express.Router();
router.get('/shouye', (req, res) => {
    res.send(data);
});




module.exports = router;