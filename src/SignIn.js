import React, {Component } from 'react'

import './SignIn.css'

class SignIn extends Component {
    state={
        username: '',
    }

    handleChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signIn({
            uid: '123214',
            username: this.state.username,
        })
        console.log(this.state.username)
    }

    render(){
        return(
            <div className="signIn">
            <form 
            onSubmit={this.handleSubmit}
            style={styles.form}
            >
            <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
                style={styles.input}
            />
            <button type="submit" style={styles.button}> Sign In </button>
            </form>
            </div>
        )
    }
}
const styles={
    form:{
        display: 'flex',
        flexDirection:'column',
        width: '40rem',
        backgroundColor: 'white',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
        marginBottom: '2rem',
        paddingBottom: '2rem',
        justifyContent: 'center',
        aliginItems: 'center',
    },

    input: {
        fontSize: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#1c110e',
        border: '2px solid #1c110e ',
        ':focus': {
          outline: 0,
        },
      },


  button: {
    display: 'block',
    margin: '0 auto 1rem',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#1c110e',
    color: 'white',
    width: '20rem',
    cursor: 'pointer',
  },

}


export default SignIn