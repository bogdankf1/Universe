import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch } from 'react-router-dom'
import ToolsBox from './ToolsBox'
import Tool from './Tool'
import { ROUTES } from '../constants/routes'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class ToolsContainer extends Component {
  render() {
    return (
      <Switch>
        <Route component={Tool} path={ROUTES.TOOLS.TOOL} />
        <Route component={ToolsBox} path={ROUTES.TOOLS.BASE_PATH} />
      </Switch>
     ) 
  }
}

ToolsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(ToolsContainer))