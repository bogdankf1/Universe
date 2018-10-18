import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DEFAULT_STOCKS_RANGE } from '../constants/app'
import { TOOLS } from '../constants/ActionTypes'
import { Typography } from '@material-ui/core'
import StocksChartContainer from './StocksChartContainer'
import CompanyStocksLoading from './CompanyStocksLoading'
import RangesContainer from './RangesContainer'
import CompaniesCardsContainer from './CompaniesCardsContainer';
import DefaultStocksLoading from './DefaultStocksLoading';

const styles = {
  toolsStocksContainer: {
    padding: '20px'
  },
  stocksChartContainer: {
    height: 300
  }
}

class ToolStocks extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: TOOLS.SAVE_CURRENT_RANGE,
      payload: DEFAULT_STOCKS_RANGE
    })
  }
  render() {
    const { companiesList, classes, selectedCompanyStocks, selectedCompany } = this.props
    const { stocksChartContainer, toolsStocksContainer } = classes

    return (
      <div className={toolsStocksContainer}>
        {companiesList.length ? 
          <CompaniesCardsContainer /> :
          <DefaultStocksLoading />
        }
        <RangesContainer />
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