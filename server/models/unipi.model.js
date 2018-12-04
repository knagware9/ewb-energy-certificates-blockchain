"use strict";

const uniqid = require('uniqid');

module.exports = class UnipiModel {
    constructor(user, id = uniqid()) {
        this.id = id;
        this.user = user;
    }
};