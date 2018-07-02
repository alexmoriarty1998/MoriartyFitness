import React, { Component } from 'react'

import './Main.css'


class Header extends Component {
    render(){
        const lifterIcon = "https://i.pinimg.com/originals/ed/9d/7b/ed9d7b4b0552a0beb043cfb8ad0f1633.png"

        return (
            <div className="header">
                
                    <img 
                        id="lifterIcon"
                        alt="cartoon weight lifter"
                        src= {lifterIcon }/>
                    <h1> Moriarty Personal Fitness Research and Tracking </h1>
                    <img 
                        id="lifterIcon"
                        alt="cartoon weight lifter"
                        src= {lifterIcon }/>
            </div>
            
        )
    }
}

export default Header