const express = require('express');
const router = express().Router();

const mySQL = require('mysql');

const myConn = mySQL.createConnection({
    host: "to-do-list-db.c3uuui20uizj.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "rHah9TRjYPAjvynN0WBF",
    port: "33-6"
});

myConn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


router.post('/:userId', (req, res) => {
    console.log(req.params.userId);
});

router.post('/:userId/sql', (req, res) => {
    console.log(req.params.userId);
    console.log("create db");
});

module.exports = router;