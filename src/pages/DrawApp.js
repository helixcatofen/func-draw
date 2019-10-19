import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ChromePicker } from 'react-color'

import './DrawPage.scss'
import './DrawApp.scss'

class DrawApp extends Component {

    state = {
        displayColorPicker: false,
        color:"#00000",
        size:1,
      };
    
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
      handleChange = (color) =>{
        this.setState({ color: color.hex })
      }
      
      
      
      render() {
        const popover = {
          position: 'absolute',
          zIndex: '2',
        }
        const cover = {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        }

        return (
          <div class='container'> 
            <div class='draw-form'>
                <p>
                <label>
                    Function:
                </label>
                <input type="text" value={this.state.value} />
                
                </p>
                

            <div class='flex-row'>
                <input type="submit" value="Draw" />
                <div class='input-box'>
                    <input type="number" value={this.state.size}/>

                    <button  onClick={ this.handleClick } style={{backgroundColor:this.state.color}}></button>
                        { this.state.displayColorPicker ? <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }/>
                        <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
                        </div> : null }

                </div> 
            </div>

            </div>


   
          </div>
        )
      }
}

export default DrawApp;