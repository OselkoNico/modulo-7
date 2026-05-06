import mysql from 'mysql2';
import express from 'express';
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "shop"
})

connection.connect(() => {
    console.log("Database connected");
})

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM users", function (err, result) {
        if(err) {
            console.log(err)
            return res.status(500).json({
                message: 'Database server error, try again later'
            })
        }
        res.status(200).json({
            message: 'Ok',
            result
        })
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})