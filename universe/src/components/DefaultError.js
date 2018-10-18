import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const styles = {
  errorPageContainer: {
    width: '100%',
    height: '100%'
  },
  errorMessage: {
    width: 250,
    height: 250,
    background: '#212121',
    borderRadius: 20,
    padding: 10
  }
}

class DefaultError extends Component {
  render() {
    const { classes, errorText } = this.props
    const { errorPageContainer } = classes

    return (
      <div className={errorPageContainer}>
        <Grid container justify={'center'} alignItems={'center'} className={errorPageContainer}>
          <Grid item>
            <Typography variant="display1" color="secondary">
              {errorText}
            </Typography>
          </Grid>
        </Grid>
      </div>
     ) 
  }
}

DefaultError.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({

  })
)(DefaultError))