import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'
import AboutUsCard from './AboutUsCard'
import AppFooter from './AppFooter'

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
  },
  aboutSectionContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 100,
    paddingRight: 100
  }
}

class HomePage extends Component {
  render() {
    const {
      mainTitleContainer,
      mainTitle,
      mainTitleText,
      aboutSectionContainer
    } = this.props.classes
     return (
      <div className="page default-page">
        <div className="home-page-container">
          <div className="home-page-greeting-section">
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
          <div className="home-page-about-section">
            <Grid
              container
              className={aboutSectionContainer}
              justify={"center"}
              alignItems={"center"}
              spacing={32}
            >
              <Grid
                item
              >
                <AboutUsCard />
              </Grid>
              <Grid
                item
              >
                <AboutUsCard />
              </Grid>
              <Grid
                item
              >
                <AboutUsCard />
              </Grid>
            </Grid>
          </div>
          <div className="home-page-products-section">

          </div>
          <div className="home-page-contact-us-section">

          </div>
          <AppFooter />
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