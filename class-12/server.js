'use strict';

const express = require('express');
const app = express();

// ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// routes
app.use(express.static('./public'));

// middleware
app.use(express.json());
require('dotenv').config();

// routes
app.get('/', (req,res)=> {
    res.send(`<h1>Hello from Tanner </h1>`)
});

app.post('/save', (req,res) => {
    res.json(req.body);
});

app.get('/err', (req, res, next) => {
    next('you have a error');
});

app.use((err,req,res,next) => {
    res.status(500);
    res.statusMessage = 'server error';
    console.log(err, 'error here');
    res.render('error', {reqest: req, error: err});
})

app.listen(3000, () => console.log('port is running on 3000'));
