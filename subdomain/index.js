/**
 * Created by pahlava on 27.08.2016.
 */

var express = require('express');
var app = express();
module.exports = app;

var pgp = require("pg-promise")(/*options*/);
//var db = pgp("postgres://postgres:123@localhost:5432/postgres");
var route = require('./server/route');
var vhost = require('vhost');

app.use(vhost('*.localhost', route.routeMethod.second));
app.use(vhost('localhost', route.routeMethod.first));

var server = app.listen(665, function (req,res) {

});


