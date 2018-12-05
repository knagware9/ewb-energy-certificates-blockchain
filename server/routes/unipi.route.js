"use strict";

const express = require('express');
const router = express.Router();

// require the controller
const unipiController = require('../controllers/unipi.controller');

router.get('/:id/get', unipiController.get);
router.get('/all', unipiController.getAllBy);
router.post('/create', unipiController.create);
router.put('/:id/update', unipiController.update);
router.get('/getAllByUser/:userId', unipiController.getAllByUser);

module.exports = router;
