"use strict";

const Demand = require('../models/demand.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.unipi && req.body.kwh && req.body.price) {
        let newDemand = new Demand(req.body.unipi, req.body.kwh, req.body.price);
        abstaractController.create(newDemand, res);
    } else {
        return res.send('You must fill all fields!');
    }
};

exports.update = function (req, res) {
    if (req.body.hasCertificate) {
        abstaractController.getById(req.params.id, function (demandToUpdate) {
            let newDemand = new Demand(demandToUpdate.username, demandToUpdate.kwh, demandToUpdate.price, req.body.hasCertificate, demandToUpdate.id);
            abstaractController.update(newDemand, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.get = function get(req, res) {
    abstaractController.getById(req.params.id, function (demand) {
        if (demand) {
            res.send(demand);
        } else {
            res.send('Demand not found!');
        }
    });
};
