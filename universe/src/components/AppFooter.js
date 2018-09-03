import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {

}

class AppFooter extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    // someProp: state.someReducer.prop
  })
)(AppFooter))