import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import StockMarketTools from './StockMarketTools'
import StockMarketTool from './StockMarketTool'
import { ROUTES } from './../constants/routes'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksMarketApp extends Component {
  render() {
    return (
      <Switch>
        <Route component={StockMarketTool} path={ROUTES.STOCK_MARKET_TOOL} />
        <Route component={StockMarketTools} path={ROUTES.STOCK_MARKET_TOOLS} />
      </Switch>
     ) 
  }
}

StocksMarketApp.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(StocksMarketApp))