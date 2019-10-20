import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChromePicker } from 'react-color'

import Draw from '../components/Draw.js'

import './DrawPage.scss'
import './DrawApp.scss'


class DrawingsPage extends Component {
    
      render() {
     
        console.log(this.props.match.params.id)

        return (
            <div>
                
            </div>
        )
      }
}

export default DrawingsPage;