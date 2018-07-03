import React, { Component } from 'react'

import './Main.css'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Body from './Body.js'




class Main extends Component {
  render() {
   
    return (
      
        <div className="main" >
          <Header />
          <div className="mainContainer">
            <Sidebar 
            username={this.props.username}
            signOut={this.props.signOut}
            />
            <Body />
          </div>
        </div>
      
    )
  }
}


export default Main