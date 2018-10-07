import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '../../node_modules/@material-ui/core'
import textConstants from '../constants/textConstants'
import { push } from 'react-router-redux'
import { ROUTES } from '../constants/routes'

const styles = {
  button: {
    color: 'white',
    marginRight: '20px'
  }
}

class StocksPrediction extends Component {
  handleOpenClick = () => {
    const { dispatch } = this.props
    dispatch(push(ROUTES.TOOLS.BASE_PATH))
  }
  loadStocksSymbols = () => {
    const { dispatch } = this.props
    dispatch(push(ROUTES.SYMBOLS.STOCKS))
  }
  render() {
    const { classes } = this.props

    return (
      <div className="page default-page">
        <div className="stocks-prediction-page-wrapper">
          <Button
            variant="outlined"
            color={"primary"}
            className={`${classes.button} primary-stock-button`}
            onClick={this.handleOpenClick}
          >
            {textConstants.OPEN_STOCK_MARKET_TOOLS}
          </Button>
          <Button
            variant="outlined"
            color={"primary"}
            className={`${classes.button} primary-stock-button`}
            onClick={this.loadStocksSymbols}
          >
            {textConstants.LOAD_STOCKS_SYMBOLS}
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