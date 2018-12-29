import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SymbolsLoading from './SymbolsLoading'
import AppHeader from './AppHeader';

const styles = theme => ({
  symbolsContainer: {
    height: '100vh'
  }
})

class SymbolsContainer extends Component {
  render() {
    const { classes } = this.props
    const { symbolsContainer } = classes

    return (
      <div className={symbolsContainer}>
        <AppHeader />
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