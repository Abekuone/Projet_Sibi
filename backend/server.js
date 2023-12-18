const express = require( 'express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db= mysql.createConnexion({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'gpi'



})

app.get('/', (re, res)=>{
    return res.json("from Backend Side");
})

app.get('/users', (req, res)=>{
    const sql = "SELECT * FROM Materiels";
    db.query(sql, (err, data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})