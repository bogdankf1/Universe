import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import ROUTES from './../constants/routes'
import { Route, Switch } from 'react-router-dom'
import StocksPrediction from './StocksPrediction'
import StockMarketTools from './StockMarketTools';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={HomePage} path={ROUTES.HOME} />
          <Route component={StockMarketTools} path={ROUTES.STOCK_MARKET_TOOLS} />
          <Route component={StocksPrediction} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({

  })
)(App))
