import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadSymbolsList } from '../graphql/queries/stocks'
import { STOCK_MARKET_TOOLS } from '../constants/ActionTypes'

const styles = {

}

class StocksSymbolsContainer extends Component {
  handleSymbolsLoading = (data) => {
    const { dispatch } = this.props
    
    dispatch({
      type: STOCK_MARKET_TOOLS.SAVE_SYMBOLS_LIST,
      payload: data
    })
    
    console.log(data)
  }
  render() {
    return (
      <div className="">
        <div className="">
          <Query query={loadSymbolsList}>
            {({ loading, error, data }) => {
              if (loading) return <p>Symbols loading...</p> //Show preloader in such cases
              if (error) return <p>Error in symbols loading:(</p> //Show error page
              this.handleSymbolsLoading(data)

              return "Stocks Symbols loaded successfully!"
            }}
          </Query>
        </div>
        <div className="">

        </div>
      </div>
    )
  }
}

StocksSymbolsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(StocksSymbolsContainer))