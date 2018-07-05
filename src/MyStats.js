import React, { Component } from 'react'

import StatList from './StatList'
import MyStatsForm from './MyStatsForm'

import firebase from './firebase'

class MyStats extends Component {
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

    addStat = (body) => {
        const stats = [...this.state.stats]
        stats.push({
            id: Date.now(),
            body,
        })

        this.setState({stats})
    }

    render(){
        return (
            <div className="MyStats">
            <MyStatsForm addStat={this.addStat}/>
            <StatList stats={this.state.stats}/>
            </div>
        )
    }

}
export default MyStats