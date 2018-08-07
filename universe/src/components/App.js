import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import ROUTES from './../constants/routes'
import { Route, Switch } from 'react-router-dom'
import StocksPrediction from './StocksPrediction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={HomePage} path={ROUTES.HOME} />
          <Route component={StocksPrediction} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({

  })
)(App))
