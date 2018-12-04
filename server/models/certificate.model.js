"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(unipi, minimalPrice, demand = '', sellingPrice = 0, id = uniqid()) {
        this.id = id;
        this.unipi = unipi;
        this.minimalPrice = minimalPrice;
        this.demand = demand;
        this.sellingPrice = sellingPrice;
        this.type = 'CERTIFICATE';
    }
};
