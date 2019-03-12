const express = require('express');
const router = express.Router();
const { index, about, notFound } = require('../controller/indexController');

router.get('/', index);
router.get('/about', about);
// todo specify error route

module.exports = router;