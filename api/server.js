var express = require('express')
var app = express()
var routes = require('./routes')
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://tac:123456@ds151461.mlab.com:51461/todo-list');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port)
app.set('view engine', 'html');

console.log(port)