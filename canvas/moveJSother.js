/**
 * Created by pahlavaubivca on 19.06.2016.
 */


var fireld = document.getElementById("field"),
    rectangle = document.getElementById('rectangle'),
    mouseDonwXcoo = 0,
    mouseDownYcoo = 0;

function coo(event){
    console.log('Y - '+event.clientY, 'X - ' + event.clientX);
    if( event.clientX <620 && event.clientY<460) {
        rectangle.style.left = event.clientX + 'px';
        rectangle.style.top = event.clientY + 'px';
    }
}
function mouseDownCoordinate(event){
    console.log('Y - ' + event.clientY, 'X - ' + event.clientX);
    window.addEventListener("mousemove",coo);
}

rectangle.addEventListener('mousedown',mouseDownCoordinate);
window.addEventListener('mouseup',function(){
    window.removeEventListener('mousemove',coo);
    //window.addEventListener('mousemove',function(){})
});
