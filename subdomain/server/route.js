/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = require('./handlers');
var app = require('../index');


var routeMethod = function (qqq, echo) {
    app.get("/", handlers.handlers.index);
};
/*var routeMethod = function (app,echo) {
    app.get("/", handlers.handlers.index);
    app.get('/asd',handlers.handlers.asd);
    return app;
};*/
exports.routeMethod = routeMethod;
