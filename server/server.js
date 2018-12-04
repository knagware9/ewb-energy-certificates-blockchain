"use strict";

const express = require('express');
const bodyParser = require('body-parser');

// Imports routes
const user = require('./routes/user.route');
const certificate = require('./routes/certificate.route');
const demand = require('./routes/demand.route');
const unipi = require('./routes/unipi.route');
const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user', user);
app.use('/certificate', certificate);
app.use('/demand', demand);
app.use('/unipi', unipi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

let port = 8080;

// server: start and listen
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});