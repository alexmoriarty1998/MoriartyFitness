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
            uid: '123214',
            username: this.state.username,
        })
        console.log(this.state.username)
    }

    render(){
        return(
            <div className="SignIn">
            <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
            />
            <button type="submit"> Sign In </button>
            </form>
            </div>
        )
    }
}

export default SignIn