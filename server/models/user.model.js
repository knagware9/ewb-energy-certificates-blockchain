"use strict";

module.exports = class User {
    constructor(username, name = '', street = '', postalCode = '', sellingPrice = 0, buyingPrice = 0) {
        this.id = username;
        this.name = name;
        this.street = street;
        this.postalCode = postalCode;
        this.sellingPrice = sellingPrice;
        this.buyingPrice = buyingPrice;
        this.type = 'USER';
    }
};
