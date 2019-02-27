import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'
import AppHeader from './AppHeader'
import MobileMenu from './MobileMenu'

const styles = theme => ({
  mainTitleContainer: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  mainTitle: {
    zIndex: '10'
  },
  mainTitleText: {
    textTransform: 'uppercase',
    [theme.breakpoints.down("xs")]: {
      fontSize: '2rem',
      marginBottom: 50
    }
  },
  subTitleText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: '1.3rem'
    }
  },
  aboutSectionContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 100,
    paddingRight: 100
  }
})

class HomePage extends Component {
  render() {
    const {
      mainTitleContainer,
      mainTitle,
      mainTitleText,
      subTitleText
    } = this.props.classes
     return (
      <div className="page default-page">
        <AppHeader />
        <div className="home-page-container">
          <div className="home-page-greeting-section">
            <Grid container justify={'center'} alignItems={'center'} className={mainTitleContainer}>
              <Grid item className={mainTitle}>
                <Typography variant="display3" gutterBottom className={mainTitleText}>
                  {textConstants.UNIVERSE_PROJECT}
                </Typography>
                <Typography variant="display1" gutterBottom className={subTitleText}>
                  {textConstants.PREDICT_PRICE_ON_STOCKS}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
        <MobileMenu />
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