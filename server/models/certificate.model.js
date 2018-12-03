"use strict";

const uniqid = require('uniqid');

module.exports = class Certificate {
    constructor(smartMeter, kwh, minimalPrice) {
        this._id = uniqid();
        this._smartMeter = smartMeter;
        this._kwh = kwh;
        this._minimalPrice = minimalPrice;
        this._demand = '';
    }

    get smartMeter() {
        return this._smartMeter;
    }

    set smartMeter(smartMeter) {
        this._smartMeter = smartMeter;
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
}