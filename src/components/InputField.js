import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
import { ChromePicker } from 'react-color'

class InputField extends Component{
    render(){
        return(
            <div className='container'> 
            <div className='draw-form'>
                <p>
                <label>
                    Function:
                </label>
                <input type="text" value={this.state.text} onChange={this.changeFunction} />
                
                </p>
                

            <div className='flex-row'>
                <input type="submit" value="Draw" onClick={ this.handleDraw } />
                <div className='input-box'>
                    <input type="number" value={this.state.size} onChange={this.updateNumber}/>

                    <button  onClick={ this.handleClick } style={{backgroundColor:this.state.color}}></button>
                        { this.state.displayColorPicker ? <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }/>
                        <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
                        </div> : null }

                </div> 
            </div>

            </div>
            <div className='draw-container'>
              <Draw ref={this.drawEle} canvas='cnv-2'></Draw>
            </div>

            <div>

              <form onSubmit={this.submitImg}>
                <input type='submit' value='Share'>

                </input>
              </form>

            </div>


   
          </div>
        )
        
    }
}


export default InputField;