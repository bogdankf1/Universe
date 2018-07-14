import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({

  })
)(App))
