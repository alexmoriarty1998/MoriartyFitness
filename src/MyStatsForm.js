import React, { Component } from 'react'
import { StyleSheet, css} from 'aphrodite'


class MyStatsForm extends Component{
    
  state = {
    liftType: '',
    max: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addStat(this.state.liftType, this.state.max)
    this.setState({ liftType: '', max: '' })
  }

  handleChange = (event) => {
    const target = event.target
    const name = target.name
    this.setState({ [name]: event.target.value })
  }

  render() {
    return (
      <div>
      <form
        onSubmit={this.handleSubmit}
        className={css(styles.form)}
      >
        <input
          name="liftType"
          type="text"
          placeholder="Exercise..."
          autoFocus
          className={css(styles.input)}
          value={this.state.liftType}
          onChange={this.handleChange}
        />
         <input
          name="max"
          type="text"
          placeholder="Max..."
          className={css(styles.input)}
          value={this.state.max}
          onChange={this.handleChange}
        />
        
        <button type="submit" className={css(styles.button)}>Send</button>
      </form>
      </div>
    )
  }
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'rgb(238, 233, 233)',
        height: '12rem',
        width: '80%',
        display: 'flex',
        margin: 'auto',
        padding: 0,
        flexDirection: 'column',
    },

    input: {
        flexGrow: 1.5,
        fontSize: '1.2rem',
        border: '.5px solid grey',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '.8rem',
        margin: '.2rem'
      },

    button: {
        fontSize: '1.5rem',
        backgroundColor: '#F79824',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderRadius: '.8rem',
        border: '1px solid white',
        flexGrow: 1.25,
        width: '60%',
        alignSelf: 'center',
        margin: '.2rem'
    }
})

export default MyStatsForm