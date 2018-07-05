import React from 'react'

import Stat from './Stat'

const StatList = (props) => {
    return (
        <div className="statList">
            {
                props.stats.map(
                    stat => <Stat key={stat.id} stat={stat} />
                )
            }
        </div>
    )
}

export default StatList