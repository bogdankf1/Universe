import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'

const styles = {
  mainTitleContainer: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  mainTitle: {
    zIndex: '10'
  },
  mainTitleText: {
    textTransform: 'uppercase'
  }
}

class HomePage extends Component {
  render() {
    const { mainTitleContainer, mainTitle, mainTitleText } = this.props.classes
     return (
      <div className="page default-page">
        <AppHeader />
        <div className="home-page-container">
          <Grid
            container
            justify={'center'}
            alignItems={'center'}
            className={mainTitleContainer}
          >
            <Grid
              item
              className={`${mainTitle}`}
            >
              <Typography
                variant="display3"
                gutterBottom
                className={`${mainTitleText} home-page-main-title`}
              >
                {textConstants.UNIVERSE_PROJECT}
              </Typography>
              <Typography
                variant="display1"
                gutterBottom
              >
                {textConstants.PREDICT_PRICE_ON_STOCKS}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
     ) 
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(HomePage))