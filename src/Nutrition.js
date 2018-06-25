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
            <a href={'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3529694/'} target='_blank'>Protein Timing</a>
            </div>
        )
    }
}
export default Nutrition