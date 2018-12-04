"use strict";

const uniqid = require('uniqid');

module.exports = class UnipiModel {
    constructor(user, name, id = uniqid()) {
        this.id = id;
        this.user = user;
        this.name = name
    }
};
