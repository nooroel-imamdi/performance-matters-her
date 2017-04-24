// Packages
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
var ngrok = require('ngrok');
var browserify = require('browserify');
var httpsRedirect = require('express-https-redirect');

// Hide secret data i.e. apikey
require('dotenv').config()

var app = express();
app.use('/', httpsRedirect())

// .env
var apiUrl = process.env.API_URL;
var apiKey = process.env.API_KEY;
var searchKey = process.env.SEARCH_KEY;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Routing
app.get('/', function (req, res) {
  request(apiUrl + '?q=&key=' + apiKey + '&format=json', function (error, response, body) {
    var data = JSON.parse(body)
    res.render('index.ejs', {paintings: data})
  });
})

app.get('/:principalOrFirstMaker', function (req, res, principalOrFirstMaker) {
  request(apiUrl + '?q=' + req.params.principalOrFirstMaker + '&key=' + apiKey + '&format=json', function (error, response, body) {
    var data = JSON.parse(body)
    res.render('results.ejs', {paintings: data});
  });
})

app.get('/painting/:objectNumber', function (req, res, objectNumber) {
  request(apiUrl + '/' + req.params.objectNumber + '?&key=' + apiKey + '&format=json', function (error, response, body) {
    var data = JSON.parse(body)
    res.render('detail.ejs', {paint: data});
  });
})

app.get('/offline', function (req, res) {
  res.render('offline.ejs');
})

var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});
