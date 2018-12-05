"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const certificateController = require('../controllers/certificate.controller');

router.get('/:id/get', certificateController.get);
router.get('/all', certificateController.getAllBy);
router.post('/create', certificateController.create);
router.put('/:id/update', certificateController.update);
router.get('/getAllByUniPi/:uniPiId', certificateController.getAllByUniPi);

module.exports = router;
