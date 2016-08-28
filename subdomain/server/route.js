/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = require('./handlers');
var app = require('../index');


var routeMethod = function (req,res) {
    var pgp = require("pg-promise")(/*options*/);
    var db = pgp("postgres://postgres:123@localhost:5432/postgres");

    db.one("insert into testtable1 values(2,'qqqqqqq')", 123)
        .then(function (data) {
            console.log("DATA:", data.value);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    res.send(req.hostname);
    //app.get("/", handlers.handlers.index);
};

/*var routeMethod = function (app,echo) {
    app.get("/", handlers.handlers.index);
    app.get('/asd',handlers.handlers.asd);
    return app;
};*/
exports.routeMethod = routeMethod;

