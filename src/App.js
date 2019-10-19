import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage.js'
import UserPage from './pages/DrawPage.js'

import { Link } from 'react-router-dom'

import  Nav  from './components/Nav.js'

import './styles/app.scss'



export default function App() {

  return (
    <div class="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/draw" component={UserPage} />
      </Switch>

 
    </div>
    
  )
}