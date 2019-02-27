import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import { ROUTES } from './../constants/routes'
import { Route, Switch } from 'react-router-dom'
import ToolsContainer from './ToolsContainer'
import SymbolsContainer from './SymbolsContainer'
import Registration from './Registration'
import News from './News'
import IPOCalendar from './IPOCalendar'
import Login from './Login'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  appContainer: {
    width: '100%',
    height: '100%',
    background: '#2B2C2F'
  }
})

class App extends Component {
  render() {
    const { classes } = this.props
    const { appContainer } = classes

    return (
      <div className={appContainer}>
        <Switch>
          <Route component={IPOCalendar} path={ROUTES.APP.IPO_CALENDAR} />
          <Route component={News} path={ROUTES.APP.NEWS} />
          <Route component={Login} path={ROUTES.APP.LOGIN} />
          <Route component={Registration} path={ROUTES.APP.REGISTER} />
          <Route component={HomePage} path={ROUTES.APP.HOME} />
          <Route component={ToolsContainer} path={ROUTES.TOOLS.BASE_PATH} />
          <Route component={SymbolsContainer} path={ROUTES.SYMBOLS.STOCKS} />
          <Route component={HomePage} />
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(connect(
  state => ({

  })
)(App)))
