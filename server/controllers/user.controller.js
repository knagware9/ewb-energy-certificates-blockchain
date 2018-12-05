"use strict";

const User = require('../models/user.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.username && req.body.name && req.body.street && req.body.postalCode) {
        let newUser = new User(req.body.username, req.body.name, req.body.street, req.body.postalCode);
        abstaractController.create(newUser, res);
    } else {
        return res.send('You musst fill all fields!');
    }
};

exports.update = function (req, res) {
    if (req.body.name && req.body.street && req.body.postalCode && req.body.sellingPrice) {
        abstaractController.getById(req.params.id, function (userToUpdate) {
            let newUser = new User(userToUpdate.id, req.body.name, req.body.street, req.body.postalCode, req.body.sellingPrice);
            abstaractController.update(newUser, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.updateSellingPrice = function (req, res) {
    if (req.body.sellingPrice) {
        abstaractController.getById(req.params.id, function (userToUpdate) {
            let newUser = new User(userToUpdate.id, userToUpdate.name, userToUpdate.street, userToUpdate.postalCode, req.body.sellingPrice);
            abstaractController.update(newUser, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.updateBuyingPrice = function (req, res) {
    if (req.body.buyingPrice) {
        abstaractController.getById(req.params.id, function (userToUpdate) {
            let newUser = new User(userToUpdate.id, userToUpdate.name, userToUpdate.street, userToUpdate.postalCode, req.body.sellingPrice, req.body.buyingPrice);
            abstaractController.update(newUser, res);
        });

    } else {
        return res.send('You must fill all fields!');
    }
};

exports.get = function (req, res) {
    abstaractController.getById(req.params.id, function (user) {
        if (user) {
            res.send(user);
        } else {
            res.send('User not found!');
        }
    });
};

exports.getAllBy = function (req, res) {
    let queryString = JSON.stringify({
        selector: {
            type: 'USER'
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


exports.authenticate = function (req, res) {

};
