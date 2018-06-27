import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'

class MyStatsForm extends Component{
    
  state = {
    body: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.body)
    this.setState({ body: '' })
  }

  handleChange = (event) => {
    this.setState({ body: event.target.value })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={css(styles.form)}
      >
        <input
          type="text"
          placeholder="Max Bench..."
          autoFocus
          className={css(styles.input)}
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button type="submit" className={css(styles.button)}>Send</button>
      </form>
    )
  }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        border: '2px solid #999',
        borderRadius: '0.6rem',
        margin: '0.35rem',
        padding: 0,
    },

    input: {
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
      },

    button: {
        fontSize: '1.5rem',
        backgroundColor: '#F79824',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
    }




})

export default MyStatsForm