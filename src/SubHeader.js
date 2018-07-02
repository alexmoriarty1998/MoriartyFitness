import React, {Component} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css'
import Nutrition from './Nutrition.js'
import Splits from './Splits.js'
import MyStatsPage from './MyStatsPage.js'

class Stats extends Component {
    render(){
        return(
            <div className="subheader">
        <ul className="navLinks">
          <li>
            <NavLink
            to='/nutrition'>

             Nutrition 
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/splits">
            Splits
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/mystatspage">
            MyStats
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/nutrition" render={() => <Nutrition />}/>
          <Route path="/splits" render={() => <Splits />}/>
          <Route path="/mystatspage" render={()=> <MyStatsPage />}/>
          <Route render={() => <p> To get started, click one of the links above. </p>} />
        </Switch>
      </div>
        )
    }
}
export default Stats