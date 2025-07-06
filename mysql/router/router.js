const express = require('express');
const homies = require('../controller/')

const router = express.Router();

router.get('/', homies);

module.exports = router