import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import { ROUTES } from './../constants/routes'
import { Route, Switch } from 'react-router-dom'
import StocksPrediction from './StocksPrediction'
import AppHeader from './AppHeader'
import ToolsContainer from './ToolsContainer'
import SymbolsContainer from './SymbolsContainer'
import Login from './Login'
import Registration from './Registration'
import News from './News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={News} path={ROUTES.APP.NEWS} />
          <Route component={Login} path={ROUTES.APP.LOGIN} />
          <Route component={Registration} path={ROUTES.APP.REGISTER} />
          <Route component={HomePage} path={ROUTES.APP.HOME} />
          <Route component={ToolsContainer} path={ROUTES.TOOLS.BASE_PATH} />
          <Route component={SymbolsContainer} path={ROUTES.SYMBOLS.STOCKS} />
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
