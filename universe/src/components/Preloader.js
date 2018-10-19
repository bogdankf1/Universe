import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress, Grid } from '@material-ui/core'

const styles = theme => ({
  progress: {
    margin: 10,
    color: theme.palette.secondary.light
  }
})

class Preloader extends Component {
  render() {
    const { classes } = this.props
    const { progress } = classes

    return (
      <Grid container justify={'center'} alignItems={'center'}>
        <Grid item>
          <CircularProgress className={progress} size={50} />
        </Grid>
      </Grid>
     ) 
  }
}

Preloader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({

  })
)(Preloader))