import React, { Component } from 'react'


import Main from './Main'
import SignIn from './SignIn'


class App extends Component {
  state = {
     user: {},
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if(user) this.setState({user})
  }

  signIn = (user) => {
    this.setState({user})
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut = () => {
    this.setState(prevState => ({
      user: {
          ...prevState.user,
          username: null
      }
  }))
  localStorage.removeItem('user')
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
