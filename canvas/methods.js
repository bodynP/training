/**
 * Created by pahlavaubivca on 22.06.2016.
 */

/**
 * constructor rooms
 * @constructor
 * */
function rooms() {
};
rooms.prototype.parameters = function () {
};

/**
 * constructor shapes
 * @constructor
 * */
function shape() {
};
/**
 * @method points
 * @param {array} - array matrix, [[x1,y1],[x2,y2],...,[xN,yN]]
 * @param {object} - ctx canvas getContext('2d');
 * */
var shapeO={}
shapeO.points = function (array, context) {
    for (var i = 0; i < array.length; i++) {
        if (i == 0) {
            context.moveTo(array[i][0], array[i][1]);
        } else {
            context.lineTo(array[i][0], array[i][1])
        }
    }
};
shapeO.background = function (src, context) {
    var background = new Image();
    background.src = src;
    background.onload = function () {
        context.drawImage(background, 0, 0);
    }
};
shapeO.move = function () {
};
shapeO.structure = function () {
};
shape.prototype.draw = function (params) { // params {points:[],background:src,canvas{context:context,method:method}}
    if (params.canvas != void 0) {
        var context = params.canvas.context,
            method = params.canvas.method;
        context.beginPath();
        if (params.points != void 0) shapeO.points(params.points, context);
        if (params.background != void 0) shapeO.background(params.background, context);
        if (params.structure != void 0) shapeO.structure(params.structure);
        if (params.move != void 0) shapeO.move(params.move);
        context.closePath();
        context[method]();

    }
};
/**
 * constructor walls
 * @constructor
 * */
function walls() {
};
walls.prototype.points = function () {
};
walls.prototype.structure = function () {
};
walls.prototype.background = function () {
};
walls.prototype.window = function () {
};