/**
 * Created by pahlava on 27.08.2016.
 */

var express = require('express');
var app = express();
module.exports = app;
var route = require('./server/route');
var vhost = require('vhost');



/*var server = express();
server.use(vhost.vhost(server.enabled('trust proxy')));
server.listen(665);*/

//app.use(vhost('*.test2-local', route.routeMethod('test2')));
//app.use(vhost('test1-local', route.routeMethod('test1')));

var server = app.listen(665, function () {
    route.routeMethod('asdf');
});



//server.use(evh.vhost(server.enabled('trust proxy')));
