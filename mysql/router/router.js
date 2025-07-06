const express = require('express');
const homeCall = require('../controller/')

const router = express.Router();

router.get('/', homeCall);

module.exports = router