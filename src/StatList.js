import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import Stat from './Stat'

import MyStatsForm from './MyStatsForm'


const StatList = (props) => {
    return (
        <div className="statList">
            <NavLink to="mystatspage/mystatsform">
                Enter a new stat here
            </NavLink>
            <Switch>
            <Route path="/mystatspage/mystatsform" render={() => <h1><MyStatsForm addStat={props.addStat} /></h1>} />
            </Switch>
            {
                props.stats.map(
                    stat => <Stat key={stat.id} stat={stat} />
                )
            }
        </div>
    )
}

export default StatList