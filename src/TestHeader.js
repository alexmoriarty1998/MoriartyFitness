import React, { Component } from 'react'

class TestHeader extends Component {
    render(){

        return (
            <div className="test" styles={styles.header}>
                <h2>test</h2>
                <p> tester paragraph </p>
            </div>
        )
    }
}

const styles = {
    header: {
      backgroundColor: 'yellow',
      borderBottom: '1px solid #ccc',
      height: '3rem',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
}

export default TestHeader