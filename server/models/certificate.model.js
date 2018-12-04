"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(unipi, kwh, minimalPrice) {
        this._id = uniqid();
        this._unipi = unipi;
        this._kwh = kwh;
        this._minimalPrice = minimalPrice;
        this._demand = '';
    }

    get unipi() {
        return this._unipi;
    }

    set unipi(unipi) {
        this._unipi = unipi;
    }

    get kwh() {
        return this._kwh;
    }

    get minimalPrice() {
        return this._minimalPrice;
    }

    get sellingPrice() {
        return this._sellingPrice;
    }

    set sellingPrice(sellingPrice) {
        this._sellingPrice = sellingPrice;
    }

    get demand() {
        return this._demand;
    }

    set demand(demand) {
        this._demand = demand;
    }

    get id() {
        return this._id;
    }
};