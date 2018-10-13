import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadStocksList } from '../graphql/queries/stocks'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import { TOOLS } from '../constants/ActionTypes'
import CompanyCard from './CompanyCard'
import { Grid, Typography } from '@material-ui/core'
import StocksChartContainer from './StocksChartContainer'
import CompanyStocksLoading from './CompanyStocksLoading'

const styles = {
  toolsStocksContainer: {
    padding: '20px'
  },
  stocksChartContainer: {
    height: 300
  }
}

class ToolStocks extends Component {
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
  saveCompanyStocksList = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: TOOLS.SAVE_SELECTED_COMPANY_STOCKS_LIST,
      payload: data
    })
  }
  render() {
    const { companiesList, classes, selectedCompanyStocks, selectedCompany } = this.props
    const { stocksChartContainer, toolsStocksContainer } = classes

    return (
      <div className={toolsStocksContainer}>
        {companiesList.length ? 
          <Grid container justify={'center'} alignItems={'center'} spacing={16}>
            {companiesList.map((company, idx) =>
              <Grid item key={idx}>
                <CompanyCard company={company} />
              </Grid>
            )}
          </Grid> :
          <Query query={loadStocksList} variables={{ id: DEFAULT_LOADED_STOCKS.join(",") }}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>
              if (error) return <p>Error :(</p>
              
              this.handleLoadedStocksData(JSON.parse(data.stocks.list))

              return 'Stocks data loaded successfully!'
            }}
          </Query>
        }
        <div className={stocksChartContainer}>
          <Typography variant="display1" component="h3">
            {selectedCompany.companyName}
          </Typography>
          <CompanyStocksLoading />
          {selectedCompanyStocks.length ?
            <StocksChartContainer /> : null
          }
        </div>
      </div>
     ) 
  }
}

ToolStocks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.tools.toolName,
    companiesList: state.tools.defaultStocks || [],
    selectedCompany: state.tools.selectedCompany || {},
    selectedCompanyStocks: state.tools.selectedCompanyStocks || []
  })
)(ToolStocks))