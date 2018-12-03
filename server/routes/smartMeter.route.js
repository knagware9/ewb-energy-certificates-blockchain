"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const smartMeterController = require('../controllers/smartMeter.controller');

router.post('/create', smartMeterController.create);
router.put('/:id/update', smartMeterController.update);

module.exports = router;