/**
 * Created by bodynP on 15.05.2016.
 */
var start  = document.getElementById('start'),
    result = document.getElementById('result'),
    arrBig = new Array(),
    arrSmall = new Array(),
    count = 0,
    maxValue = 10;

for(var i = 0;i<maxValue;i++){
    arrSmall = [];
    for(var j = 0;j<maxValue;j++){
        count++;
        if(count.toString().length==1){
            arrSmall.push(count + '_');
            
        } else {
            arrSmall.push(count);
        }    
    }
    arrBig.push(arrSmall);
    start.appendChild(document.createTextNode(arrSmall));
    var br = document.createElement('br');
    start.appendChild(br);
}
