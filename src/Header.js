import React, { Component } from 'react'

class Header extends Component {
    render(){

        const styles = {

            header: {
                backgroundColor: '#ffd69b',
                borderBottom: '1px solid #ccc',
                height: '6rem',
                padding: '0 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
               
              },
          

            headerpictures: {
                height: '5rem',
                width: '5rem',
                
            },

            alex: {
                color: 'black',
                fontSize: '3rem',
            }

        }

        return (
            <div className="header" style={styles.header}>
            <img 
            id="profilepic" 
            alt="alex and emma"
            style={styles.headerpictures}
            src="https://i.pinimg.com/originals/ed/9d/7b/ed9d7b4b0552a0beb043cfb8ad0f1633.png"></img>
            <p style={styles.alex}> Alex Moriarty Fitness Research </p>
            <img 
            id="profilepic" 
            alt="alex and emma"
            style={styles.headerpictures}
            src="https://i.pinimg.com/originals/ed/9d/7b/ed9d7b4b0552a0beb043cfb8ad0f1633.png"></img>
            </div>
        )
    }
}

export default Header