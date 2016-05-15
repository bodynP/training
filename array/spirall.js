/**
 * Created by bodynP on 15.05.2016.
 */

/*
 * task
 * build matrix and wrap in spirall, on clock arrow
 * */
var start = document.getElementById('start'),
    result = document.getElementById('result'),
    arrBigStart = new Array(),
    arrSmallStart = new Array(),
    arrBigResult = new Array(),
    arrSmallResult = new Array(),
    count = 0,
    maxValue = 10;

for (var i = 0; i < maxValue; i++) {
    arrSmallStart = [];
    arrSmallResult = [];
    for (var j = 0; j < maxValue; j++) {
        count++;
        if (count.toString().length == 1) {
            arrSmallStart.push(count + '_');

        } else {
            arrSmallStart.push(count);
        }
        arrSmallResult.push('+')
    }
    arrBigResult.push(arrSmallResult);
    result.appendChild(document.createTextNode(arrSmallResult));
    arrBigStart.push(arrSmallStart);
    start.appendChild(document.createTextNode(arrSmallStart));
    var br = document.createElement('br'),
        br2 = document.createElement('br');
    start.appendChild(br);
    result.appendChild(br2);


}
