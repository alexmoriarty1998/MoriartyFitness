import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Header from './Header.js'
import Nutrition from './Nutrition.js'



class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Header />
      <div>
        <ul className="navLinks">
          <li>
            <NavLink 
              to="/nutrition">
             Nutrition 
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/splits">
            Splits
            </NavLink>
          </li>

        </ul>
        <Switch>
          <Route path="/nutrition" render={() => <Nutrition />}/>
          <Route path="/splits" render={() => <h1> Splits </h1>}/>
          <Route render={() => <p> to get started click above </p>} />
        </Switch>
      </div>
      </div>

    )
  }
}





export default App
