"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const unipiController = require('../controllers/unipi.controller');

router.get('/:id', unipiController.get);
router.post('/create', unipiController.create);
router.put('/:id/update', unipiController.update);

module.exports = router;