import React, {Component} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import MyStatsForm from './MyStatsForm'

class MyStatsPage extends Component {
    render(){
        return (
            <div className="mystatspage">
            <h2>
                <NavLink to="/mystatspage/mystatsform">
                Enter a new stat here
                </NavLink>
            </h2>
            <Switch>
                <Route path="/mystatspage/mystatsform" render={() => <h1><MyStatsForm /></h1>} />
                <Route render={() => <p> what... </p>} />
            </Switch>
            </div>
        )
    }
}
export default MyStatsPage