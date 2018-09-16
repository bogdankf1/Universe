import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksMarketTool extends Component {
  render() {
    const { match : { params }, toolName } = this.props

    return (
      <div>
        {console.log(params)}
        <Typography>
          {toolName}
        </Typography>
      </div>
     ) 
  }
}

StocksMarketTool.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.stockMarketTools.toolName
  })
)(StocksMarketTool))