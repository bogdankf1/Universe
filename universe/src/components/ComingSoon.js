import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import textConstants from '../constants/textConstants'
import { Grid, Typography } from '@material-ui/core'

const styles = {
  titleContainer: {
    height: '100%'
  }
}

class ComingSoon extends Component {
  render() {
    const { classes } = this.props
    const { titleContainer } = classes

    return (
      <div className={'coming-soon-screen'}>
        <Grid container justify={'center'} alignItems={'center'} className={titleContainer}>
          <Grid item>
            <Typography variant="display4" component="h3">
              {textConstants.COMING_SOON}
            </Typography>
          </Grid>
        </Grid>
      </div>
     ) 
  }
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.tools.toolName
  })
)(ComingSoon))