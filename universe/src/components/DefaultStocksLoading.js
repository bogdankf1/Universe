import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadStocksList } from '../graphql/queries/stocks'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import { TOOLS } from '../constants/ActionTypes'
import Preloader from './Preloader'
import DefaultError from './DefaultError';
import textConstants from '../constants/textConstants';

const styles = {

}

class DefaultStocksLoading extends Component {
  handleLoadedStocksData = (data) => {
    const { dispatch } = this.props
    const companiesList = Object.entries(data).map(item => {
        return {
          symbol: item[1].quote.symbol,
          companyName: item[1].quote.companyName
        }
      })

    dispatch({
      type: TOOLS.SAVE_DEFAULT_STOCKS_NAMES_LIST,
      payload: companiesList
    })
  }
  render() {
    return (
      <Query query={loadStocksList} variables={{ id: DEFAULT_LOADED_STOCKS.join(",") }}>
        {({ loading, error, data }) => {
          if (loading) return <Preloader />
          if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />
          
          this.handleLoadedStocksData(JSON.parse(data.stocks.list))

          return 'Stocks data loaded successfully!'
        }}
      </Query>
     ) 
  }
}

DefaultStocksLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({

  })
)(DefaultStocksLoading))