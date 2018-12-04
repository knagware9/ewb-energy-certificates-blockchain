"use strict";

const uniqid = require('uniqid');

module.exports = class Demand {
    constructor(unipi, kwh, price, hasCertificate = false, id = uniqid()) {
        this.id = id;
        this.unipi = unipi;
        this.kwh = kwh;
        this.price = price;
        this.hasCertificate = hasCertificate;
    }
};
