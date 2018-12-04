"use strict";

const Unipi = require('../models/unipi.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.username) {
        let newUnipi = new Unipi(req.body.username);
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

exports.get = function get(req, res) {
    abstaractController.getById(req.params.id, function (unipi) {
        if (unipi) {
            res.send(unipi);
        } else {
            res.send('Uni Pi not found!');
        }
    });
};