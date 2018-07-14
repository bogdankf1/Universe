import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { buttonText } = this.props
    return (
      <a className="button">
        {buttonText}
      </a>
    )
  }
}

export default Button