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


import './Draw.scss'

class CanvasDraw extends Component{
    

    plotRange = 100; // define max value for function input x value
    /**
     *
     * @param func callable function of x, returning numeric value for y
     * @param yOffset distance of the x-axis of a trace from top of the canvas
     * @param xGranularity step for x-value increment
     * @param color HEX colour code for the function trace
     * @param lineWidth width for the function trace
     */
    drawTrace = (func, yOffset, xGranularity, color, traceWidth) => {
        var numPoints = this.plotRange / xGranularity; // calculate number of points to plot based on max x-coord value and x-coords interval
    
        var pixelScale = document.getElementById(this.props.canvas || 'canvas-1').offsetWidth / numPoints; // ratio between function range and canvas size
        
        var trace = new Path(); // graphical trace of math function
        trace.strokeColor = color;
        trace.strokeWidth = traceWidth;

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

    drawFunc= (string, color, size)=> {
        var funcOfXString = 'f(x) ='+string;// + document.getElementById("funcInput").value;
        console.log(funcOfXString);
        var func = evaluate(funcOfXString);
        console.log(func(5));
        this.drawTrace(func, 50, 1, color ,size);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad=()=>{
        paper.setup(this.props.canvas || 'canvas-1');
        if(this.props.drawData){
            this.props.drawData.forEach(element => {
                this.drawFunc(element.function, element.color, element.size);
            });
        }
        console.log('====================================');
        console.log(this.props.canvas || 'canvas-1');
        console.log('====================================');
    
    }

    render(){
        return(

            
          <div>
                <div className="canvas">
                    <canvas resize="true" hidpi="off" id={this.props.canvas || 'canvas-1'} data-paper-scope="1">
                         {/* style="-webkit-user-drag: none; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class=""> */}
                         
                    </canvas>
                </div>

          </div>
          
        );
        
    }
}


export default CanvasDraw;