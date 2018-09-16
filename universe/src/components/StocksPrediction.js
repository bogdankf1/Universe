import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppHeader from './AppHeader'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '../../node_modules/@material-ui/core'
import textConstants from '../constants/textConstants'
import StockMarketTools from './StockMarketTools'
import { push } from 'react-router-redux'
import ROUTES from '../constants/routes'

const styles = {
  button: {
    color: '#ffffff'
  }
}

class StocksPrediction extends Component {
  handleOpenClick = () => {
    const { dispatch } = this.props
    dispatch(push(ROUTES.STOCK_MARKET_TOOLS))
  }
  render() {
    const { classes, dispatch } = this.props

    return (
      <div className="page default-page">
        <div className="stocks-prediction-page-wrapper">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={this.handleOpenClick}
          >
            {textConstants.OPEN_STOCK_MARKET_TOOLS}
          </Button>
        </div>
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