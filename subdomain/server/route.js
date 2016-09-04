/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = require('./handlers');

module.exports = (function () {

    var sub = function (app,express) {
        var api = new express.Router();

        api.get("/",handlers.index);
        return api;
    };
    var direct = function (app,express) {
        var api = new express.Router();


        api.get("/",handlers.index2);
        return api;
    };

   /* db.one("insert into testtable1 values(2,'qqqqqqq')", 123)
        .then(function (data) {
            console.log("DATA:", data.value);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    res.send(req.hostname);*/

   return {
       "sub":sub,
       "direct":direct
   }
})();


