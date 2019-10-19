import React, { Component } from 'react'
import { evaluate } from 'mathjs'

import paper, {
    Project,
    View,
    Layer,
    Group,
    Path,
    Point,
    Circle,
    Ellipse,
    Rectangle,
    PointText,
    Tool,
  } from 'paper'


class CanvasDraw extends Component{
    

    plotRange = 100; // define max value for function input x value

    drawTrace = (func, yOffset, xGranularity) => {
        var numPoints = this.plotRange / xGranularity; // calculate number of points to plot based on max x-coord value and x-coords interval
    
        var pixelScale = document.getElementById('canvas-1').offsetWidth / numPoints; // ratio between function range and canvas size
        console.log(pixelScale);
        var trace = new Path(); 
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
    drawFunc= (string)=> {
        var funcOfXString = 'f(x) ='+string;// + document.getElementById("funcInput").value;
        console.log(funcOfXString);
        var func = evaluate(funcOfXString);
        console.log(func(5));
        this.drawTrace(func, 50, 1);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad=()=>{
        paper.setup('canvas-1');
    }

    render(){
        return(

            
          <div>
                <div className="canvas">
                    <canvas resize="true" hidpi="off" id="canvas-1" data-paper-scope="1">
                         {/* style="-webkit-user-drag: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class=""> */}
                         
                    </canvas>
                </div>

          </div>
          
        );
        
    }
}


export default CanvasDraw;