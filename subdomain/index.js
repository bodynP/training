/**
 * Created by pahlava on 27.08.2016.
 */

var express = require('express');
var app = express();
module.exports = app;
var route = require('./server/route');
var vhost = require('vhost');

app.use(vhost('*.localhost', route.routeMethod));
app.use(vhost('localhost', route.routeMethod));
var server = app.listen(665, function (req,res) {

});


