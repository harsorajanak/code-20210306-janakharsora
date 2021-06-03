var express = require('express');
var router = express.Router();

var BmiRoutes = require('./bmi.routes')

router.use('/', BmiRoutes);


module.exports = router;

