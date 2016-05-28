/**
 * Created by bodynP on 15.05.2016.
 */

/*
 * task
 * build matrix and wrap in spirall, on clock arrow
 * */
var start = document.getElementById('start'),
    maxValue = 10,
    tableResult = document.createElement('TABLE');

for (var i = 0; i < maxValue; i++) {
    var trResult = document.createElement('TR');
    tableResult.appendChild(trResult);
    for (var j = 0; j < maxValue; j++) {
        var tdResult = document.createElement('TD');
        trResult.appendChild(tdResult);
    }
    var tr = document.getElementsByTagName('tr');
}
start.appendChild(tableResult);


var increment= 0,decrement=maxValue- 1,ccount=0;

for (var q = 0; q <= maxValue / 2; q++) {
    for (var w = increment; w < decrement; w++) {
        tr[increment].children[w].innerHTML = ccount++;
    }
    for (var e = increment; e < decrement; e++) {
        tr[e].children[decrement].innerHTML = ccount++;
    }
    for (var r = decrement; r > increment; r--) {
        tr[decrement].children[r].innerHTML = ccount++;
    }
    for (var t = decrement; t > increment; t--) {
        tr[t].children[increment].innerHTML = ccount++;
    }
    increment++;
    decrement--;
}
