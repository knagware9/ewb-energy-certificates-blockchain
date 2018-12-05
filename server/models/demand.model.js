"use strict";

const uniqid = require('uniqid');

module.exports = class Demand {
    constructor(unipi, kwh, price, hasCertificate = false, id = uniqid()) {
        this.id = id;
        this.unipi = unipi;
        this.kwh = parseInt(kwh);
        this.price = parseFloat(price);
        this.hasCertificate = hasCertificate;
        this.type = 'DEMAND';
    }
};
