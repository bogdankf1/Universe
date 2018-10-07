import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class ToolIndices extends Component {
  render() {
    return (
      <div>
        Indices component
      </div>
     ) 
  }
}

ToolIndices.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.tools.toolName
  })
)(ToolIndices))