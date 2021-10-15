const express = require('express');
const con = require('./db');
const PORT = 3000;
const HOST = 'localhost';
const app = express();

// Middlewars
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static('../public'));

// Database
con.connect((err) => {
    if (err) throw err;
    console.log('Database Connected!');
});

// Routers
app.use(require('./routers'));

// Server
app.listen(PORT, HOST, () => console.log(`Server ${HOST} listening on port ${PORT}`));