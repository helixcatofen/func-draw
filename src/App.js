import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage.js'
import UserPage from './pages/DrawPage.js'
import DrawApp from './pages/DrawApp.js'
import DrawingsPage from './pages/DrawingsPage.js'

import { Link } from 'react-router-dom'

import  Nav  from './components/Nav.js'

import './styles/app.scss'



export default function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/draw" component={UserPage} />
        <Route exact path="/draw/2" component={DrawApp} />
        <Route exact path="/drawings" component={DrawingsPage} />
        <Route exact path="/drawing/:id" component={DrawApp} />

      </Switch>

 
    </div>
    
  )
}