const express = require('express');
const router = express.Router();

const mySQL = require('mysql');

const conn = mySQL.createConnection({
    host: "to-do-list-db.c3uuui20uizj.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "fake pass",
    port: "3306",
    database: "TodoDB"
});

function connectDB() {
    return new Promise((resolve, reject) => {
        conn.connect(err => {
            if (err) reject(err);
            resolve("Connected!");
         });
    });
}

function checkUserTB() {
    return new Promise((resolve, reject) => {
        conn.query("SHOW TABLES LIKE 'users'" , (err, result) => {
            if (err) reject(err);

            if (result.length == 0){
                let sql = "CREATE TABLE users (userID INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255))";
                conn.query(sql, function (err, result) {
                    if (err) reject (err);
                    resolve("User table created");
                });
            }

            else resolve("User table already exists")
        });
    });
}

function checkItemsTB() {
    return new Promise((resolve, reject) => {
        conn.query("SHOW TABLES LIKE 'tasks'" , (err, result) => {
            if (err) reject(err);

            if (result.length == 0){
                let sql = "CREATE TABLE tasks (taskID INT AUTO_INCREMENT PRIMARY KEY, " +
                    "userID int NOT NULL, " +
                    "task TINYTEXT, completed BOOL, " +
                    "FOREIGN KEY (userID) REFERENCES users(userID))";
                conn.query(sql, function (err, result) {
                    if (err) reject (err);
                    resolve("Task table created");
                });
            }
            else resolve("Task table already exists");
        });
    });
}

async function dbSetUp() {
    try{
        let result = await connectDB();
        console.log(result);
        result = await checkUserTB();
        console.log(result);
        result = await checkItemsTB();
        console.log(result);
    } catch (err){
        throw err;
    }
}

dbSetUp(); // Ensure DB is properly set up

router.post('/:username', (req, res) => {
    console.log(req.params.userId);
});

router.put('/:username/sql', (req, res) => {
    console.log(req.params.userId);
    console.log("create db");
});

module.exports = router;