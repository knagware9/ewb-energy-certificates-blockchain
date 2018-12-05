"use strict";

const Unipi = require('../models/unipi.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.username && req.body.name && req.body.id) {
        let newUnipi = new Unipi(req.body.username, req.body.name, req.body.id);
        abstaractController.create(newUnipi, res);
    } else {
        return res.send('You must fill all fields!');
    }
};

exports.update = function (req, res) {
    if (req.body.username) {
        abstaractController.getById(req.params.id, function (unipiToUpdate) {
            let newUnipi = new Unipi(req.body.username, unipiToUpdate.id);
            abstaractController.update(newUnipi, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.getAllBy = function (req, res) {
    let queryString = JSON.stringify({
        selector: {
            type: 'UNIPI'
        }
    });

    abstaractController.getByQueryString(queryString, function (users) {
        if (users) {
            res.send(users);
        } else {
            res.send('No users not found!');
        }
    });
};

exports.getAllByUser = function (req, res) {
    let queryString = JSON.stringify({
        'selector': {
            'type': 'UNIPI',
            'user': req.params.userId
        }
    });

    abstaractController.getByQueryString(queryString, function (users) {
        if (users) {
            res.send(users);
        } else {
            res.send('No users not found!');
        }
    });
};

exports.get = function (req, res) {
    abstaractController.getById(req.params.id, function (unipi) {
        if (unipi) {
            res.send(unipi);
        } else {
            res.send('Uni Pi not found!');
        }
    });
};
