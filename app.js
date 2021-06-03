var express = require('express');
var config = require('./config/config.js');
var routes = require('./routes/index');
const formidable = require('express-formidable');
var app = express();

app.use(formidable());

//use router
app.use('/', routes);

app.listen(config.port, function() {
    console.log(`app is listening at http://localhost:${config.port}`);
});



