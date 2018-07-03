import React, { Component } from 'react'

import './Main.css'

class Sidebar extends Component {
  render() {
    return (
     <div className="sidebar">
     <h2> {this.props.username} </h2>
     <button onClick={() => this.props.signOut()}> 
     <p> Sign Out </p>
     </button>
     </div>
    )
  }
}


export default Sidebar