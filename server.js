//Importing node libraries
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//Express Object
var app = express();
//Configuring app Object
app.use(express.static(path.join(__dirname,"public")));
app.use(favicon(path.join(__dirname,'favicon.ico')));
//TODO remove dev logger for production. Create a logger for dev environment.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Home Page route
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});
//Start server at port 3000
app.listen(3500);