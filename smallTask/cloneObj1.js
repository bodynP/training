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

var harr = [];

/*harr[0] = [qwe, asd];
function clone(obj, nobj) {
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            for (var i = 0; i < harr.length; i++) {
                if (harr[i].indexOf(obj[k]) >= 0) {
                    nobj[k] = obj[k].constructor();
                    nobj[k] = harr[i][0];
                }
            }
            if (!nobj[k]) {
                if (obj[k] && obj[k].constructor == Array) {
                    nobj[k] = obj[k].constructor();
                    for (var i = 0; i < obj[k].length; i++) {
                        if (obj[k][i] && (obj[k][i].constructor == Array || obj[k][i].constructor == Object)) {
                            if (obj[k][i] == harr[0][1]) {
                                nobj[k][i] = harr[0][0];
                            } else {
                                nobj[k][i] = obj[k][i].constructor();
                                clone(obj[k][i], nobj[k][i]);
                                harr.push([nobj[k], obj[k]]);
                            }
                        } else {
                            nobj[k][i] = obj[k][i];
                        }
                    }
                } else if (obj[k] && obj[k].constructor == Object) {
                    nobj[k] = obj[k].constructor();
                    clone(obj[k], nobj[k]);
                    harr.push([nobj[k], obj[k]]);
                } else {
                    nobj[k] = obj[k];
                }
            }
        }
    }
}
clone(asd, qwe);*/



function clone(nobj, obj, cache) {
    cache = cache || [];
    if (obj && 'object' === typeof obj && (obj.constructor == Object || obj.constructor == Array)) {
        var index = cache.indexOf(obj);
        if (index > -1) {
            nobj = cache[index + 1];
        } else {
            cache = cache.concat([obj, nobj]);
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    nobj[key] = clone(obj[key] && obj[key].constructor ? obj[key].constructor() : null,obj[key], cache);
                }
            }
        }
    }
    return nobj || obj;
}
clone(qwe, asd);

