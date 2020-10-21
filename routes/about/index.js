const express = require('express');
const router = express.Router();

// CONTROLLER
const get = require('./get');

/*************
* ISSUE - Inccorect root route (/) for About
* router.get('/about', get);
*************/
// @route     GET /
// @desc      Display About Page
router.get('/', get);

/*************
* ISSUE - Router not exported and made available.
*************/
module.exports = router;
