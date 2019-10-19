var plotRange = 100; // define max value for function input x value
var canvasWidth = document.getElementById('canvas-1').offsetWidth; // get canvas width

window.drawTrace = drawTrace; // register function in global scope so that it can be called from the main script

function drawTrace(func, yOffset, xGranularity) {
    var numPoints = plotRange / xGranularity; // calculate number of points to plot based on max x-coord value and x-coords interval

    var pixelScale = canvasWidth / numPoints; // ratio between function range and canvas size

    var trace = new Path(); // graphical trace of math function
    trace.strokeColor = 'black';

    // plot points with equal x-intervals and y-value calculated from suplied function
    var i;
    for (i = 0; i < numPoints; i++) {
        var x = i * xGranularity;
        var y = func(x);

        x = i * pixelScale; // scale so that the points take all the canvas
        y = yOffset + y * pixelScale; // add offset from the top of the canvas and scale

        // plot a point at scaled x value
        var functionPoint = new Point(x, y);
        trace.add(functionPoint);
    }

    trace.smooth(); // smooth out the path
}