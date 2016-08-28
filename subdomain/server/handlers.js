/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = (function(){

    var index = function(req,res){
        res.send('djihad');
    };
    var index2 = function(req,res){
        res.send(req.vhost[0])
    };

    return {
        "index":index,
        "index2":index2
    }
})();
exports.handlers = handlers;
