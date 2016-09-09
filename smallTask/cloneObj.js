/**
 * Created by Администратор on 09.09.2016.
 */
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

function clone(object, newObject) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] && object[key].constructor === Array) {
                for (var i = 0; i < hashArr.length; i++) {
                    if (hashArr[i] && hashArr[i][1] == object[key]) {
                        newObject[key] = [];
                        newObject[key] = hashArr[i][0];
                    }
                }
                if (newObject[key]) { }
                else {
                    newObject[key] = [];
                    for (var i = 0; i < object[key].length; i++) {
                        if (object[key][i] && object[key][i].constructor === Object) {
                            if (object[key][i] == asd) {
                                newObject[key][i] = qwe;
                            } else {
                                newObject[key][i] = {};
                                clone(object[key][i], newObject[key][i]);
                                hashArr.push([newObject[key][i],[object[key][i]]]);
                            }
                        } else if (object[key][i] && object[key][i].constructor === Array) {
                            newObject[key][i] = [];
                            clone(object[key][i], newObject[key][i]);
                            hashArr.push([newObject[key][i],[object[key][i]]]);
                        } else {
                            newObject[key][i] = object[key][i]
                        }
                    }
                    hashArr.push([newObject[key],object[key]]);
                }
            } else if (object[key] && object[key].constructor === Object) {
                for (var i = 0; i < hashArr.length; i++) {
                    if (hashArr[i] &&hashArr[i][1] == object[key] || hashArr[i][1][0] == object[key]) {
                        newObject[key] = {};
                        newObject[key] = hashArr[i][0];
                    }
                }
                if (newObject[key]) {}
                else {
                    if (object[key] == asd) {
                        newObject[key] = qwe;
                    } else {
                        newObject[key] = {};
                        clone(object[key], newObject[key]);
                        hashArr.push([newObject[key],[object[key]]]);
                    }
                }
            }
            else {
                newObject[key] = object[key];
            }
        }
    }
}
clone(asd, qwe)


