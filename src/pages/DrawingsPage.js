import React, { Component } from 'react'
import DrawingCard from '../components/DrawingCard.js'
import { Link } from 'react-router-dom'




import './DrawPage.scss'
import './DrawingsPage.scss'

class DrawingsPage extends Component {

    render() {
        var sampleDrawing = [
            {function: "x+1", color: "#00000", size: 1},
            {function: "x+1", color: "#f31b1b", size: "5"},
            {function: "sin(x)", color: "#1b81f3", size: "9"},
            {function: "0.01*x", color: "#a61bf3", size: "5"},
            {function: "0.01*x-20", color: "#cece11", size: "11"},
            {function: "0.01*x+20", color: "#cece11", size: "11"},
            {function: "0.01*x+25", color: "#cece11", size: "11"},

        ]

        var dummyData = [
            {name:'Josep', file_name:'cnv1', data:sampleDrawing},
            {name:'Josep', file_name:'cnv2', data:sampleDrawing},
            {name:'Josep', file_name:'cnv3', data:sampleDrawing},
            {name:'Josep', file_name:'cnv4', data:sampleDrawing},
        ]
       

        return(
            <div class='container'>
                <h1>
                    Latest Drawings
                </h1>
                <div className='cards-container'>
                    {dummyData.map(el =>{
                        return(
                            <DrawingCard drawingData={el.data} name={el.name} fileName={el.file_name}>

                            </DrawingCard>
                        )
                    })}
                 


                </div>
            </div>
        )
        
    }
}

export default DrawingsPage;