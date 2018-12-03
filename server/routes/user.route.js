"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const userController = require('../controllers/user.controller');

router.post('/create', userController.create);
router.put('/:id/update', userController.update);

module.exports = router;