import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const styles = theme => ({
  button: {
    minWidth: 180,
    backgroundColor: '#01579B',
    color: '#FFFFFF'
  }
})


class AuthButton extends Component {
  handleClick = () => {
    const { mutationAction, handleButtonClick } = this.props
    handleButtonClick(mutationAction)
  }
  render() {
    const { classes, buttonText } = this.props
    const { button } = classes

    return (
      <Button
        variant="outlined"
        color="primary"
        className={button}
        onClick={this.handleClick}
      >
        {buttonText}
      </Button>
    )
  }
}

AuthButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({})
)(AuthButton))