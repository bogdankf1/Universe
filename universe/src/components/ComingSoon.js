import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import textConstants from '../constants/textConstants'
import { Grid, Typography } from '@material-ui/core'

const styles = {
  titleContainer: {
    height: '100%'
  },
  comingSoonScreen: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: 'cover'
  }
}

class ComingSoon extends Component {
  render() {
    const { classes } = this.props
    const { titleContainer, comingSoonScreen } = classes

    return (
      <div className={`news-screen ${comingSoonScreen}`}>
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
    
  })
)(ComingSoon))