import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadSymbolsList } from '../graphql/queries/stocks'
import { SYMBOLS } from '../constants/ActionTypes'
import Preloader from './Preloader'
import DefaultError from './DefaultError';
import textConstants from '../constants/textConstants';

const styles = theme => ({
  symbolsContainer: {
    height: 'calc(100vh - 64px)'
  }
})

class SymbolsContainer extends Component {
  handleSymbolsLoading = (data) => {
    const { dispatch } = this.props
    
    dispatch({
      type: SYMBOLS.SAVE_LIST,
      payload: data
    })
    
    console.log(data)
  }
  render() {
    const { classes } = this.props
    const { symbolsContainer } = classes

    return (
      <div className={symbolsContainer}>
        <Query query={loadSymbolsList}>
          {({ loading, error, data }) => {
            if (loading) return <Preloader />
            if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />
            this.handleSymbolsLoading(data.symbols.list)

            return "Stocks Symbols loaded successfully!"
          }}
        </Query>
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