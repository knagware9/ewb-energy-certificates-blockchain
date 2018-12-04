"use strict";

const Certificate = require('../models/certificate.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.unipi && req.body.kwh && req.body.minimalPrice) {
        let newCertificate = new Certificate(req.body.unipi, req.body.kwh, req.body.minimalPrice);
        abstaractController.create(newCertificate, res);
    } else {
        return res.send('You must fill all fields!');
    }
};

exports.update = function (req, res) {
    if (req.body.demand && req.body.sellingPrice) {
        abstaractController.getById(req.params.id, function (certificateToUpdate) {
            let newCertificate = new Certificate(certificateToUpdate.unipi, certificateToUpdate.kwh, certificateToUpdate.minimalPrice, req.body.demand, req.body.sellingPrice);
            abstaractController.update(newCertificate, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.get = function get(req, res) {
    abstaractController.getById(req.params.id, function (certificate) {
        if (certificate) {
            res.send(certificate);
        } else {
            res.send('Certificate not found!');
        }
    });
};