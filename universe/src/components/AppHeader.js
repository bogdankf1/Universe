import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppHeader extends Component {
  render() {
    return (
      <div className="page page-header">

      </div>
    )
  }
}

export default connect(
  state => ({
    // someProp: state.someReducer.prop
  })
)(AppHeader)