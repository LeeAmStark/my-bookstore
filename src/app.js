const express = require('express');
const mongoose = require('mongoose');

const app = express();

// midlleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

//database connection
const dbURI =
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then((result) => app.listen(3000))
        .catch((err) => console.log(err));

//routes
app.get('/login', (req, res) => res.render('login'));
app.get('/home', (req, res) => res.render('home'));