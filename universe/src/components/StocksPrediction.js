import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader'
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

class StocksPrediction extends Component {
  render() {
    const {
      mainTitleContainer,
      mainTitle,
      mainTitleText,
      aboutSectionContainer
    } = this.props.classes
     return (
      <div className="page default-page">
        <AppHeader />
        
      </div>
     ) 
  }
}

StocksPrediction.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(StocksPrediction))