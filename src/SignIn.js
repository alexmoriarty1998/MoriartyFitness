import React, {Component } from 'react'



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
            userId: '123214',
            username: this.state.username,
        })
    }

    render(){
        return(
            <div className="signIn" >
            <h1 style={styles.heading}> Welcome to Moriarty Fitness </h1>
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
        height: '60vh',
        backgroundColor: 'white',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
        marginBottom: '2rem',
        paddingBottom: '2rem',
        justifyContent: 'center',
        aliginItems: 'center',
    },

    input: {
        
        fontSize: '1.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#1c110e',
        border: 0,
        borderBottom: '1.5px solid #1c110e ',
        width: '30rem',
        padding: '0.5rem',
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

  heading: {
      display: 'block',
      backgroundColor: '#1c110e',
      borderRadius: '1rem',
      color: 'white',
      width: '35rem',
      padding: '2rem',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
  },

}


export default SignIn