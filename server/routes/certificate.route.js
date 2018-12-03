"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const certificateController = require('../controllers/certificate.controller');

router.post('/create', certificateController.create);
router.put('/:id/update', certificateController.update);

module.exports = router;