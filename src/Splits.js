import React, {Component} from 'react'

class Splits extends Component{
    render(){

        const styles = {
            splits: {
                color: 'yellow',
            }
        }
        return(
            <div className="splits" style={styles.splits}>
            <h1>Splits</h1>
            </div>
        )
    }
}
export default Splits