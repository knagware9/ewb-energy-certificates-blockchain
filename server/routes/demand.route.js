"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const demandController = require('../controllers/demand.controller');

router.get('/:id', demandController.get);
router.post('/create', demandController.create);
router.put('/:id/update', demandController.update);

module.exports = router;