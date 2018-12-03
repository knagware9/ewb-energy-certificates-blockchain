"use strict";

module.exports = class User {
    constructor(username, name = '', street = '', postalCode = '', sellingPrice = 0) {
        this._username = username;
        this._name = name;
        this._street = street;
        this._postalCode = postalCode;
        this._sellingPrice = sellingPrice;
    }

    get username() {
        return this._username;
    }

    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }

    set street(street) {
        this._street = street;
    }
    get street() {
        return this._street;
    }

    set postalCode(postalCode) {
        this._postalCode = postalCode;
    }
    get postalCode() {
        return this._postalCode;
    }

    set sellingPrice(sellingPrice) {
        this._sellingPrice = sellingPrice;
    }
    get sellPrice() {
        return this._sellingPrice;
    }
}