import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Header from './Header'
import './App.css'



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
          <Route path="/nutrition" render={() => <h1> Nutrition </h1>}/>
          <Route path="/splits" render={() => <h1> Splits </h1>}/>
          <Route render={() => <p> to get started click above </p>} />
        </Switch>
      </div>
      </div>

    )
  }
}





export default App
