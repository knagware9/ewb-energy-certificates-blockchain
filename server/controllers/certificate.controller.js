"use strict";

const Certificate = require('../models/certificate.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.unipi && req.body.minimalPrice && req.body.kwhs) {
        for(var i = 0; i < req.body.kwhs; i++) {
            let newCertificate = new Certificate(req.body.unipi, req.body.minimalPrice);
            abstaractController.create(newCertificate, res);
        }
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

exports.getAllBy = function (req, res) {
    let queryString = JSON.stringify({
        'selector': {
            'type': 'CERTIFICATE'
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
    abstaractController.getById(req.params.id, function (certificate) {
        if (certificate) {
            res.send(certificate);
        } else {
            res.send('Certificate not found!');
        }
    });
};
