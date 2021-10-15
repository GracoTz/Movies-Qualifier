const express = require('express');
const Router = express.Router();
const con = require('./db');
const mdw = require('./middlewars');

Router.post('/new', mdw.verify, (req, res) => {
    const { name, rating } = req.body;
    let sql = `INSERT INTO films (id,name,rating) VALUES (null, '${name}', '${parseInt(rating)}')`;
    con.query(sql, (err) => {
        if (err) throw err;
        res.json({message: "Film saved correctly in the database"});
    });
});

Router.get('/get-films', (req, res) => {
    let sql = "SELECT * FROM films";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({films: result});
    });
});

module.exports = Router;