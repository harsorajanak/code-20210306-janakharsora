var express = require('express');
var router = express.Router();
var BmiController = require('../src/controllers/bmi.controller')
var Validate = require('./validation/index')


router.post('/bmi/calculate',Validate.calculate, BmiController.calculate);


module.exports = router;

