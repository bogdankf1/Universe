import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadStocksList } from '../graphql/queries/stocks'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import { TOOLS } from '../constants/ActionTypes'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class ToolStocks extends Component {
  handleLoadedStocksData = (data) => {
    const { dispatch } = this.props
    console.log(Object.entries(data))
    const companiesNames = Object.entries(data).map((item) => {
      return item[1].quote.companyName
    })
    dispatch({
      type: TOOLS.SAVE_DEFAULT_STOCKS_NAMES_LIST,
      payload: companiesNames
    })
    console.log(companiesNames)
  }
  render() {
    return (
      <div>
        <Query query={loadStocksList} variables={{ id: DEFAULT_LOADED_STOCKS.join(",") }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            
            this.handleLoadedStocksData(JSON.parse(data.stocks.list))
            // console.log(JSON.parse(data.stocks.list))

            return data.stocks.list
          }}
        </Query>
      </div>
     ) 
  }
}

ToolStocks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.tools.toolName
  })
)(ToolStocks))