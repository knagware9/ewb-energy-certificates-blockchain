"use strict";

const uniqid = require('uniqid');

module.exports = class Demand {
    constructor(user, kwh, price, hasCertificate = false, id = uniqid()) {
        this.id = id;
        this.user = user;
        this.kwh = kwh;
        this.price = price;
        this.hasCertificate = hasCertificate;
        this.type = 'DEMAND';
    }
};