import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SymbolsLoading from './SymbolsLoading'

const styles = theme => ({
  symbolsContainer: {
    height: 'calc(100vh - 64px)'
  }
})

class SymbolsContainer extends Component {
  render() {
    const { classes } = this.props
    const { symbolsContainer } = classes

    return (
      <div className={symbolsContainer}>
        <SymbolsLoading />
      </div>
    )
  }
}

SymbolsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(SymbolsContainer))