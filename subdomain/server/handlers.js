/**
 * Created by pahlava on 27.08.2016.
 */
var handlers = (function(){

    var index = function(req,res){
        res.send('djihad');
    };
    var asd = function(req,res){
        res.send('asd');
    };
    return {
        "index":index,
        "asd":asd
    }
})();
exports.handlers = handlers;
