import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

class Nav extends Component{
    render(){
        return(
            <header>
                <h2>
                    Logo
                </h2>
            <nav>
            <ul>
                <li>  <Link to="/">Home</Link> </li>
                <li>  <Link to="/draw">Draw</Link> </li>
                <li>  <Link to="/drawings">Drawings</Link> </li>
            </ul>
        
            </nav>
         </header>
        )
        
    }
}


export default Nav;