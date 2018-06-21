import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Header from './Header'



class App extends Component {
  render() {
   
    return (
      <div className="App">
      <Header />
      <div>
        <ul>
          <li>
            <NavLink to="/test"> testLink </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/test" render={() => <h1> TEST </h1>}/>
          <Route render={() => <p> to get started click above </p>} />
        </Switch>
      </div>
      </div>

    )
  }
}





export default App
