import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadStocksList } from '../graphql/queries/stocks'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import { TOOLS } from '../constants/ActionTypes'
import CompanyCard from './CompanyCard'
import { Grid } from '@material-ui/core'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
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
  render() {
    const { companiesList, classes, selectedCompany } = this.props

    return (
      <div>
        {companiesList.length ? 
          <Grid container justify={'center'} alignItems={'center'} spacing={16}>
            {companiesList.map((company, idx) =>
              <Grid item>
                <CompanyCard company={company} key={idx} />
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
        <div className="stocks-graph-container">
          {selectedCompany.companyName ?
            <div>
              <Query query={loadStocksList} variables={{ id: selectedCompany.symbol }}>
                {({ loading, error, data }) => {
                  if (loading) return <p>{`Loading ${selectedCompany.companyName} stocks data...`}</p>
                  if (error) return <p>{`Error :(`}</p>

                  return data.stocks.list
                }}
              </Query>
            </div> : null
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
    selectedCompany: state.tools.selectedCompany || {}
  })
)(ToolStocks))