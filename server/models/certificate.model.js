"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(unipi, minimalPrice, demand = '', sellingPrice = 0.0, id = uniqid()) {
        this.id = id;
        this.unipi = unipi;
        this.minimalPrice = parseFloat(minimalPrice);
        this.demand = demand;
        this.sellingPrice = parseFloat(sellingPrice);
        this.type = 'CERTIFICATE';
    }
};
