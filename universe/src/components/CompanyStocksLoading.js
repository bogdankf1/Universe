import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadCompanyStocksChart } from '../graphql/queries/stocks'
import { TOOLS } from '../constants/ActionTypes'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import textConstants from '../constants/textConstants'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class CompanyStocksLoading extends Component {
  saveCompanyStocksList = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: TOOLS.SAVE_SELECTED_COMPANY_STOCKS_LIST,
      payload: data
    })
  }
  render() {
    const { selectedCompany, currentRange } = this.props

    return (
      <div>
        {selectedCompany.companyName ?
          <div>
            <Query query={loadCompanyStocksChart} variables={{ id: selectedCompany.symbol, range: currentRange }}>
              {({ loading, error, data }) => {
                if (loading) return <Preloader />
                if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR}/>
                
                this.saveCompanyStocksList(data.stocksChart.list)

                return true
              }}
            </Query>
          </div> : null
        }
      </div>
     ) 
  }
}

CompanyStocksLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    selectedCompany: state.tools.selectedCompany || {},
    selectedCompanyStocks: state.tools.selectedCompanyStocks || [],
    currentRange: state.tools.currentRange || ''
  })
)(CompanyStocksLoading))