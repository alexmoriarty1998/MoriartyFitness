import React, { Component } from 'react'


import Main from './Main'
import SignIn from './SignIn'


class App extends Component {
  state = {
     user: {},
  }

  signIn = (user) => {
    this.setState({user})
  }

  signOut = () => {
    this.setState(prevState => ({
      user: {
          ...prevState.user,
          username: null
      }
  }))
  }


  isSignedIn = () => {
    return this.state.user.username
  }


  render() {
   
    return (
      <div className="App" >
      {
        this.isSignedIn() ? <Main 
        username={this.state.user.username}
        signOut={this.signOut}
        /> : <SignIn signIn={this.signIn}/>
      }
      </div>
    )
  }
}


export default App
