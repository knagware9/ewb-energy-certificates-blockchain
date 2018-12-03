"use strict";

const uniqid = require('uniqid');

module.exports = class SmartMeter {
    constructor(user) {
        this._id = uniqid();
        this._user = user;
    }

    get user() {
        return this._user;
    }
    set user(user) {
        this._user = user;
    }

    get id() {
        return this._id;
    }
}