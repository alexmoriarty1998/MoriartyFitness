import React, { Component } from 'react'

import Header from "./Header.js"
import './Main.css'
import Subheader from './SubHeader.js'
class Body extends Component {
    render(){

        return (
            <div className="body" >
               <h2> To get started, Click a tab below </h2>
               <Subheader />
            </div>
        )
    }
}





export default Body