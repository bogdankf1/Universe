import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { TOOLS } from '../constants/ActionTypes'
import { ROUTES } from '../constants/routes'
import ToolStocks from './ToolStocks'
import ToolsIndices from './ToolsIndices';

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class Tool extends Component {
  handleLoadedStocksData = (data) => {
    const { dispatch } = this.props
    console.log(Object.entries(data))
    const companiesNames = Object.entries(data).map((item) => {
      return item[1].quote.companyName
    })
    dispatch({
      type: TOOLS.SAVE_DEFAULT_STOCKS_NAMES_LIST,
      payload: companiesNames
    })
    console.log(companiesNames)
  }
  render() {
    const { match : { params }, toolName } = this.props

    return (
      <div>
        <Typography>
          {toolName || params.tool}
        </Typography>
        <Switch>
          <Route component={ToolStocks} path={ROUTES.TOOLS.STOCKS} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.INDICES} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.INDICES_FUTURES} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.CURRENCIES} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.CRYPTOCURRENCIES} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.COMMODITIES} />
          <Route component={ToolsIndices} path={ROUTES.TOOLS.BASE_PATH} />
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