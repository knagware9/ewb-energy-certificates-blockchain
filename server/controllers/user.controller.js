"use strict";

const User = require('../models/user.model');
const abstaractController = require('./abstaract.controller');

exports.create = function (req, res) {
    if (req.body.username || req.body.name || req.body.street || req.body.postalCode) {
        let newUser = new User(req.body.username, req.body.name, req.body.street, req.body.postalCode);
        abstaractController.invoke('create', [JSON.stringify(newUser)], function (result) {
            if (result === 'VALID') {
                res.send('User created successfully!');
            } else {
                res.send('Failed to create User :: ' + result);
            }
        });
    } else {
        return res.send('You musst fill all fields!');
    }
};

exports.update = function (req, res) {
    if (req.body.name || req.body.street || req.body.postalCode || req.body.sellingPrice) {
        getUser(req.params.id, function (userToUpdate) {
            let newUser = new User(userToUpdate.id, req.body.name, req.body.street, req.body.postalCode, req.body.sellingPrice);
            abstaractController.invoke('update', [JSON.stringify(newUser)], function (result) {
                if (result === 'VALID') {
                    res.send('User updated successfully!');
                } else {
                    res.send('Failed to updated User :: ' + result);
                }
            });
        });

    } else {
        return res.send('You musst fill all fields!');
    }
};

exports.authenticate = function (req, res) {

};

exports.get = function get(req, res) {
    getUser(req.params.id, function (user) {
        if (user) {
            res.send(user);
        } else {
            res.send('User not found!');
        }
    });
};

async function getUser(username, callback) {
    abstaractController.query('queryById', [username], function (result) {
        callback(JSON.parse(result));
    });
}