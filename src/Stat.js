import React from 'react'

const Stat = (props) => {
    return(
        <div className="stat">
        <p>{props.stat.liftType}: {props.stat.max}</p>
        </div>
    )
}
export default Stat
