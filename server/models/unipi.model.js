"use strict";

const uniqid = require('uniqid');

module.exports = class UnipiModel {
    constructor(user) {
        this.id = uniqid();
        this.user = user;
    }
};