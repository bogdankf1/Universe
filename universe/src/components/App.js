import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import { ROUTES } from './../constants/routes'
import { Route, Switch } from 'react-router-dom'
import StocksPrediction from './StocksPrediction'
import AppHeader from './AppHeader'
import StockMarketApp from './StockMarketApp'
import StocksSymbolsContainer from './StocksSymbolsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={HomePage} path={ROUTES.HOME} />
          <Route component={StockMarketApp} path={ROUTES.STOCK_MARKET_TOOLS} />
          <Route component={StocksSymbolsContainer} path={ROUTES.STOCKS_SYMBOLS} />
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
