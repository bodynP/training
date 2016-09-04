/**
 * Created by pahlava on 27.08.2016.
 */
module.exports = (function(){
    var index = function(req,res){
        console.log('qewrqwerqw');
        res.send(req.vhost[0]);
    };
    var index2 = function(req,res){
        res.send("djihad");

    };
    return {
        "index":index,
        "index2":index2
    }
})();

