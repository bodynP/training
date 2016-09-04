/**
 * Created by pahlava on 27.08.2016.
 */

var express = require('express');
var app = express();
var vhost = require('vhost');
var route = require('./server/route');

var direct = route.direct(app,express);
var sub = route.sub(app,express);


function createVirtualHost(domainName, method) {
    return vhost(domainName, method)

};

var subhost = createVirtualHost("*.localhost", sub);
var directhost = createVirtualHost("localhost", direct);
app.use(subhost);
app.use(directhost);


var server = app.listen(665, function () {
});









