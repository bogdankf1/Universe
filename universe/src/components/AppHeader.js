import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import textConstants from '../constants/textConstants'

class AppHeader extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="header-container">
          <div className="header-side-container header-left-side-container">
            <div className="header-title-container">
              <div className="header-title">

              </div>
            </div>
            <div className="header-logo-container">
              <div className="header-logo">

              </div>
            </div>
          </div>
          <div className="header-side-container header-right-side-container">
            <div className="header-links-container">

            </div>
            <div className="header-auth-buttons-container">
              <div className="header-login-button-container">
                <div className="header-login-button">
                  {textConstants.LOGIN}
                </div>
              </div>
              <div className="header-register-button-container">
                <Button buttonText={textConstants.REGISTER} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    // someProp: state.someReducer.prop
  })
)(AppHeader)