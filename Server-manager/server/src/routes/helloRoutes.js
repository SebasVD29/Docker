const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');

router.get('/hello', helloController.getHelloMessage);

module.exports = router;
