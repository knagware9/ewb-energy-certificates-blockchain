"use strict";

const uniqid = require('uniqid');

module.exports = class Demand {
    constructor(user, kwh, price) {
        this.id = uniqid();
        this.user = user;
        this.kwh = kwh;
        this.price = price;
        this.hasCertificate = false;
    }
};