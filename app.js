const express = require('express');
const mysql = require('mysql');
const dotenv =  require('dotenv');

dotenv.config({path: './.env'})

const app = express()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE 
})

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else  {
        console.log("MYSQL Connected")
    }
})

app.get('/', (req, res) => {
    res.send('<h1 style =  "color: green"> Hydro Backend <h1>')
})

app.listen(4000, () => {
    console.log('Server started on Port 4000');
});