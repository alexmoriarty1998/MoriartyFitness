import React, {Component} from 'react'

import './nutrition.css'


class Nutrition extends Component{
    render(){

        const styles = {
            header: {
                borderBottom: '1px solid #ccc',
                borderTop: '1px solid #ccc',
                height: '6rem',
                padding: '0 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },

              protein: {
                  height: '5rem',
              }
            }

    
        return(
            <div className="nutrition">
            <div style={styles.header} className="nutritionHeader">
            <h2 className="subHeader"> Links to some research </h2>
            <div className="protein">
            <img 
            style={styles.protein}
            src="https://www.oussnutritionreviews.com/wp-content/uploads/2017/12/best-Protein-Product-PNG.png"/>
            </div>
            </div>
            <ul className="nutritionLinks">
                <li><a href={'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3529694/'} target='_blank'>Protein Timing</a></li>
                <li><a href={'https://www.menshealth.com/nutrition/a19530412/creatine-q-a/'} target='_blank'>Creatine facts vs. myths</a></li>
                <li><a href={'https://www.healthline.com/nutrition/best-pre-workout-supplements'} target='_blank'>Preworkout Tips</a></li>
                <li><a href={'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256'} target='_blank'>Water intake</a></li>
            </ul>
            </div>
        )
    }
}
export default Nutrition