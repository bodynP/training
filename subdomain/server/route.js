/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = require('./handlers');
var index = require('../index');
var obj  = index.obj;
var app = new obj.express.Router();
//var exp = require('express');
//var app = exp();

var routeMethod = function (app) {
    var first = function (req, res){

        /*app.use('/', function (req,res,next) {
            handlers.handlers.index
            next()
        })*/
        //console.log(req)

        console.log(app.get)
        app.get("/", function (req,res) {
            res.send("great")
        });
      return app;
        /*  app.get("/", handlers.handlers.index);*/
    };
    var second = function(req, res){
        console.log('second')
        app.get("/", function () {
            res.send("greatSecond")
        });
        //res.send('afds');

    };


   /* db.one("insert into testtable1 values(2,'qqqqqqq')", 123)
        .then(function (data) {
            console.log("DATA:", data.value);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    res.send(req.hostname);*/
    //console.log(req)
    //res.send('afds');
    // app.get("/:*", handlers.handlers.index);

   return {
       "first":first,
       "second":second
   }
};
exports.routeMethod = routeMethod;

