/**
 * Created by pahlavaubivca on 19.06.2016.
 */

var mainCanvas = document.getElementById('mainCanvas'),
    canvasContainer = new CanvasLayers.Container(mainCanvas, false);

function contextFillRect(context){
   return context.fillRect(0, 0, layer.getWidth(), layer.getHeight());
}

canvasContainer.onRender = function (layer, rect, context) {
    context.fillStyle = "#ff0";
    contextFillRect(context)
};
var layer1 = new CanvasLayers.layer(20, 30, 50, 50);
canvasContainer.getChildren().add(layer1);

layer1.onRender = function (layer, rect, context) {
    context.fillStyle = "#000";
    contextFillRect(context)
}


canvasContainer.redraw();

/* canvasContext = mainCanvas.getContext('2d'),
 canvasContextV2 = mainCanvas.getContext('2d');

 canvasContext.beginPath();
 canvasContext.fillStyle = "#f00";
 canvasContext.fillRect(10, 10, 50, 50);
 canvasContext.closePath();

 canvasContext.beginPath();
 canvasContext.fillStyle = "#ff0";
 canvasContext.fillRect(150,260,120,30);
 canvasContext.closePath();

 canvasContextV2.beginPath();
 canvasContextV2.clearRect(30,30,450,450);
 canvasContextV2.closePath();*/

