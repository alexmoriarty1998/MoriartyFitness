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
            <StatList id="statlistcomponent"stats={this.state.stats}
                addStat={this.addStat} />
            </div>
        )
    }
}
export default MyStatsPage