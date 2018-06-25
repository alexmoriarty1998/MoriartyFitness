import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Header from './Header.js'
import Nutrition from './Nutrition.js'
import Splits from './Splits.js'



class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL
   
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
          <Route path={baseUrl + "/nutrition"} render={() => <Nutrition />}/>
          <Route path={baseUrl + "/splits"} render={() => <Splits />}/>
          <Route render={() => <p> to get started click above </p>} />
        </Switch>
      </div>
      </div>

    )
  }
}





export default App