import React, {Component} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import StatList from './StatList'
import MyStatsForm from './MyStatsForm'

import firebase from './firebase'


class MyStatsPage extends Component {
    constructor() {
        super()

        this.state = {
            stats: [],
        }
    }

    componentWillMount() {
        firebase.syncState('stats', {
            context: this,
            state: 'stats',
            asArray: true,
        })
    }

    addStat = (liftType, max) => {
        const stats = [...this.state.stats]
        stats.push({
            id: Date.now(),
            liftType,
            max,
        })

        this.setState({stats})
    }

    render(){
        return (
            <div className="mystatspage">
            
                <NavLink to="/mystatspage/mystatsform">
                Enter a new stat here
                </NavLink>
                <br/>
                <NavLink to="/mystatspage/currentstats">
                Current Stats 
                </NavLink>
            
            <Switch>
                <Route path="/mystatspage/mystatsform" render={() => <h1><MyStatsForm addStat={this.addStat} /></h1>} />
                <Route path="/mystatspage/currentstats" render={() => <h1><StatList stats={this.state.stats} /></h1>}/>
            </Switch>
            </div>
        )
    }
}
export default MyStatsPage