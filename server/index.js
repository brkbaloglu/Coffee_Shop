const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express()

const db = mysql.createConnection({
    host: "localhost",
    password: "mysql123",
    user: "root",
    database: "coffee_shop"
})


app.use(cors())

app.get("/coffees", (req, res) => {
    const query = "SELECT * FROM coffees"
    db.query(query, (error, data) => {
        if(error){return res.json(error)}
        return res.json(data)
    })
})

app.get("/reviews", (req, res) => {
    const query = "SELECT * FROM reviews"
    db.query(query, (error, data) => {
        if(error){return res.json(error)}
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log("Server initialized on port 3000");
})