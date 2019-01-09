'use strict';

// dependencys
const express = require('express');
const app = express();

// ejs template setup
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// static routes
app.use(express.static(`${__dirname}/public`))

// app middleware
app.use(express.json());
require('dotenv').config();

// routes
app.get('/', (req, res)=>{
    res.send(`<h1>Hello From Tanner<h1>`);
});

app.post('/save', (req,res)=>{
    res.json(req.body);
});

app.get('/err', (req,res,next)=>{
    next('this is a error');
});

app.get('*', (req,res)=>{
    res.status(404);
    res.statusMessage ='not found';
    res.render('notFound', {request: req});
});
app.use((err,req,res,next)=>{
    res.status(500);
    res.statusMessage = 'server error';
    console.log(err, 'error here');
    res.render('error', {reqest: req, error: err});
})

module.exports ={
    server: app,
    start: (port)=>{
        app.listen(port, ()=>{console.log(`server is up on ${port}`)});
    }
}

