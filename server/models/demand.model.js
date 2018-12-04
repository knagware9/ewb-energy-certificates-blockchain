"use strict";

const uniqid = require('uniqid');

module.exports = class Demand {
    constructor(user, kwh, price) {
        this._id = uniqid();
        this._user = user;
        this._kwh = kwh;
        this._price = price;
        this._hasCertificate = false;
    }

    get user() {
        return this._user;
    }

    get kwh() {
        return this._kwh;
    }

    get price() {
        return this._price;
    }

    get hasCertificate() {
        return this._hasCertificate;
    }

    set hasCertificate(hasCertificate) {
        this._hasCertificate = hasCertificate;
    }

    get id() {
        return this._id;
    }
};