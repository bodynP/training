/**
 * Created by Администратор on 06.09.2016.
 */
var asd = {
    'prop1': 12,
    'prop2': true,
    'method': function () {
        return this
    },
    'prop3': null,
    'prop4': [2, 34, 'fasdf', {
        "qqq": 666,
        "arr": [77, 98, 'qaz']
    }],
    "prop5": {
        "p5v1": true,
        "p5v2": 123,
        "p5v3": [23, 23, [34, {
            "ppp": 45
        }]]
    },
    'prop6': undefined
}
var qwe = {};
asd.wsx = asd.prop5;
asd.arr = asd.prop4;
asd.narr = asd.wsx.p5v3;
asd.wsx.p5v3[3] = asd;

var hashArr = [];
hashArr.each = function (callback) {
    var self = this;
    for (var i = 0; i < self.length; i++) {
        if (self[i] && self[i][1])callback(self[i][1], i);
    }
}
hashArr[0]=[qwe,asd];

var counter = 0

function clone(object, newObject) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] && (object[key].constructor == Array || object[key].constructor == Object)) {
                var swicher = false;
                for (var i = 0; i < hashArr.length; i++) {
                    if (hashArr[i].indexOf(object[key]) >= 0) {
                        newObject[key] = object[key].constructor();
                        newObject[key] = hashArr[i][0];
                        swicher = true;
                    }
                }
                if (!swicher) {
                    if (object[key].constructor == Array) {
                        newObject[key] = object[key].constructor();
                        for (var i = 0; i < object[key].length; i++) {
                            if (object[key][i] && (object[key][i].constructor === Array || object[key][i].constructor === Object)) {
                                var swicher = false;
                                for (var j = 0; j < hashArr.length; j++) {
                                    if (hashArr[j].indexOf(object[key][i]) >= 0) {
                                        newObject[key][i] = object[key][i].constructor();
                                        newObject[key][i] = hashArr[j][0];
                                        swicher = true;
                                    }
                                }
                                if (!swicher) {

                                    newObject[key][i] = object[key][i].constructor();
                                    clone(object[key][i], newObject[key][i]);
                                    hashArr.push([newObject[key], object[key]]);
                                }
                            } else {
                                newObject[key][i] = object[key][i];
                            }
                        }
                    } else if (object[key].constructor == Object) {
                        newObject[key] = object[key].constructor();
                        clone(object[key], newObject[key]);
                        hashArr.push([newObject[key], object[key]]);
                    } else {
                        newObject[key] = object[key];
                    }
                }
            } else {
                newObject[key] = object[key];
            }
        }
    }
}
clone(asd, qwe);


