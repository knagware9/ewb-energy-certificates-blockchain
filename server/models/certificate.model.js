"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(unipi, kwh, minimalPrice) {
        this.id = uniqid();
        this.unipi = unipi;
        this.kwh = kwh;
        this.minimalPrice = minimalPrice;
        this.demand = '';
    }
};