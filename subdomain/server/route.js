/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = require('./handlers');
var app = require('../index');


var routeMethod = (function () {
    var first = function (req, res){
        //sres.send('olol');
        console.log(req.url);
        app.get("/",function(){res.send("great")});
        //app.get("/", handlers.handlers.index);
    };
    var second = function(req, res){
        res.send('afds');
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
})();
exports.routeMethod = routeMethod;

