const express = require('express');
const router = express.Router();

// CONTROLLER
const get = require('./get');

// @route     GET /
// @desc      Display Home Page
router.get('/', get);


/*************
* ISSUE - Router not exported and made available.
*************/
module.exports = router;