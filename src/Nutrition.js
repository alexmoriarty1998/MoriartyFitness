import React, {Component} from 'react'

class Nutrition extends Component{
    render(){

        const styles = {
            nutrition: {
                color: 'red',
            }
        }
        return(
            <div className="nutrition" style={styles.nutrition}>
            <h1>Nutrition</h1>
            </div>
        )
    }
}
export default Nutrition