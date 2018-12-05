"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const demandController = require('../controllers/demand.controller');

router.get('/:id/get', demandController.get);
router.get('/all', demandController.getAllBy);
router.post('/create', demandController.create);
router.put('/:id/update', demandController.update);
router.get('/getAllByUniPi/:uniPiId', demandController.getAllByUniPi);

module.exports = router;
