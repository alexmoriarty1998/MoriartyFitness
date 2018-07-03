import React, { Component } from 'react'

import './Main.css'

class Sidebar extends Component {
  render() {
    return (
     <div className="sidebar">
     <h2> {this.props.username} </h2>
     </div>
    )
  }
}


export default Sidebar