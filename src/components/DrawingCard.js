import React, { Component } from 'react'
import Draw from '../components/Draw.js'
import { Link } from 'react-router-dom'




import './DrawingCard.scss'

class DrawingsPage extends Component {

    render() {

        return(
           
                <div className='drawing-card'>
                 
                    <div className='draw-container'>

                         <Draw  canvas={this.props.fileName} drawData={this.props.drawingData}></Draw>
                    </div>
                    <p>
                        {this.props.name}
                    </p>

                    <Link to={"/drawing"+this.props.fileName} className='btn-primary'>Edit</Link>

                </div>
        )
        
    }
}

export default DrawingsPage;