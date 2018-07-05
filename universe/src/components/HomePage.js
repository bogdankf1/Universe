import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader'

class HomePage extends Component {
  render() {
     return (
      <div className="page default-page">
        <AppHeader />
      </div>
     ) 
  }
}

export default connect(
  state => ({
    
  })
)(HomePage)