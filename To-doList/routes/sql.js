const express = require('express');
const router = express().Router();

router.post('/', (req, res) => {
    console.log('nice');
    console.log(req.body);
});

module.exports = router;