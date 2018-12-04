"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(unipi, kwh, minimalPrice, demand = '', sellingPrice = 0, id = uniqid()) {
        this.id = id;
        this.unipi = unipi;
        this.kwh = kwh;
        this.minimalPrice = minimalPrice;
        this.demand = demand;
        this.sellingPrice = sellingPrice;
    }
};