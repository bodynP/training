/**
 * Created by pahlavaubivca on 19.06.2016.
 */
var field = document.getElementById("field"),
    rectangle = document.getElementById('rectangle'),
    operator = {};

function traceCoordinate(event) {
    if (operator.traceMove) {
        operator.rectLeft = parseInt(rectangle.style.left.slice(0, -2));
        operator.rectTop = parseInt(rectangle.style.top.slice(0, -2));
        if (!operator.diffSwicher) {
            operator.diffLeft = parseInt(event.clientX - rectangle.style.left.slice(0, -2));
            operator.diffTop = parseInt(event.clientY - rectangle.style.top.slice(0, -2));
            operator.widthRect = parseInt(rectangle.style.width.slice(0, -2));
            operator.heightRect = parseInt(rectangle.style.height.slice(0, -2));
            operator.diffSwicher = true;
        }
        if (event.clientX + (operator.widthRect - operator.diffLeft) < 640 && event.clientX - operator.diffLeft > 0) {
            rectangle.style.left = event.clientX - operator.diffLeft + 'px';
        }
        if (event.clientY - operator.diffTop > 0 && event.clientY + (operator.heightRect - operator.diffTop) < 480) {
            rectangle.style.top = event.clientY - operator.diffTop + 'px';
        }
        rectangle.style.cursor = 'default';
    }
}
window.addEventListener("mousemove", traceCoordinate);

rectangle.addEventListener('mousedown', function () {
    operator.traceMove = true;
});
window.addEventListener('mouseup', function () {
    operator.traceMove = false;
    operator.diffSwicher = false;
});


var room = {};
room.shapes = [];
room.parameters = {};
room.walls = [];





