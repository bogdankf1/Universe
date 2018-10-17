import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { ROUTES } from '../constants/routes'
import ToolStocks from './ToolStocks'
import ComingSoon from './ComingSoon'
import ToolCryptoCurrencies from './ToolCryptoCurrencies'

const styles = {
  
}

class Tool extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={ToolStocks} path={ROUTES.TOOLS.STOCKS} />
          <Route component={ComingSoon} path={ROUTES.TOOLS.INDICES} />
          <Route component={ComingSoon} path={ROUTES.TOOLS.INDICES_FUTURES} />
          <Route component={ComingSoon} path={ROUTES.TOOLS.CURRENCIES} />
          <Route component={ToolCryptoCurrencies} path={ROUTES.TOOLS.CRYPTOCURRENCIES} />
          <Route component={ComingSoon} path={ROUTES.TOOLS.COMMODITIES} />
          <Route component={ComingSoon} path={ROUTES.TOOLS.BASE_PATH} />
        </Switch>
      </div>
     ) 
  }
}

Tool.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.tools.toolName
  })
)(Tool))