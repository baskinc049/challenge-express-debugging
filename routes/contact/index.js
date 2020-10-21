const express = require('express');
const router = express.Router();

// CONTROLLER
const get = require('./get');

/*************
* ISSUE - Inccorect root route (/) for Contact
* router.get('/contact', get);
*************/
// @route     GET /
// @desc      Display Contact Page
router.get('/', get);

/*************
* ISSUE - Router not exported and made available.
*************/
module.exports = router;