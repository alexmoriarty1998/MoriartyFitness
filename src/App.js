import React, { Component } from 'react'


import Main from './Main'
import SignIn from './SignIn'


class App extends Component {
  state = {
    user: {
      uid: null,
      username: null,
    },
  }

  signIn = (user) => {
    this.setState({user: user})
  }

  isSignedIn = () => {
    return this.state.user.username
  }


  render() {
   
    return (
      <div className="App" >
      {
        this.isSignedIn() ? <Main username={this.state.user.username}/> : <SignIn signIn={this.signIn}/>
      }
      </div>
    )
  }
}


export default App
