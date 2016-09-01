/**
 * Created by pahlava on 27.08.2016.
 */

/*var express = require('express');
 var app = express();
 var vhost = require('vhost');
 var serveStatic = require('serve-static');
 var connect = require('connect');
 var mainapp = connect();
 var userapp = connect();
 module.exports = userapp;
 var route = require('./server/route');
 userapp.use(function (req, res, next) {
 var username = req.vhost[0];
 userapp.use(route.routeMethod.first)
 next()
 })
 //userapp.use(serveStatic('public'))
 var appl = connect()
 appl.use(vhost('localhost', mainapp))
 appl.use(vhost('*.localhost', userapp))
 appl.listen(665)*/

var express = require('express');
var app = express();
//module.exports = app;
exports.obj = {'app':app,'express':express};
var route = require('./server/route');
var vhost = require('vhost');


function createVirtualHost(domainName, method) {
    return vhost(domainName, method);
};

var sublocalhost = createVirtualHost("*.localhost", route.routeMethod(app).first);
app.use(sublocalhost);

/*app.use('*',function(req,res){
    console.log(req);
});*/
var server = app.listen(665,function(req,res){})









