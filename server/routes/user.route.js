"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const userController = require('../controllers/user.controller');

router.get('/:id', userController.get);
router.post('/create', userController.create);
router.put('/:id/update', userController.update);
router.put('/:id/selling-price/update', userController.updateSellingPrice);

module.exports = router;