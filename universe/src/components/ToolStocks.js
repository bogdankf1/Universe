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
import CompaniesCardsContainer from './CompaniesCardsContainer'
import DefaultStocksLoading from './DefaultStocksLoading'
import AutoCompleteInput from './AutoCompleteInput'
import SymbolsLoading from './SymbolsLoading'
import PredictPriceContainer from './PredictPriceContainer'
import textConstants from '../constants/textConstants'

const styles = theme => ({
  toolsStocksContainer: {
    padding: 20
  },
  stocksChartContainer: {
    height: 300
  },
  companyNameTitle: {
    color: theme.palette.secondary.light
  },
  toolStocksHeading: {
    color: theme.palette.secondary.light,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5
  }
})

class ToolStocks extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: TOOLS.SAVE_CURRENT_RANGE,
      payload: DEFAULT_STOCKS_RANGE
    })
  }
  componentWillReceiveProps(nextProps) {
    const { dispatch, defaultStocks } = this.props
    const { defaultStocks: nextDefaultStocks } = nextProps

    if (defaultStocks.length !== nextDefaultStocks.length && nextDefaultStocks.length) {
      dispatch({
        type: TOOLS.SAVE_SELECTED_COMPANY_NAME,
        payload: nextDefaultStocks[0]
      })
    }
  }
  render() {
    const { companiesList, classes, selectedCompanyStocks, selectedCompany } = this.props
    const { stocksChartContainer, toolsStocksContainer, companyNameTitle, toolStocksHeading } = classes

    return (
      <div className={toolsStocksContainer}>
        <SymbolsLoading />
        <Typography variant="headline" className={toolStocksHeading}>
          {textConstants.SELECT_COMPANY}
        </Typography>
        <AutoCompleteInput />
        {companiesList.length ? 
          <CompaniesCardsContainer /> :
          <DefaultStocksLoading />
        }
        <Typography variant="headline" className={toolStocksHeading}>
          {textConstants.SELECT_INTERVAL}
        </Typography>
        <RangesContainer />
        <div className={stocksChartContainer}>
          <Typography className={companyNameTitle} variant="display1" component="h3">
            {selectedCompany.companyName}
          </Typography>
          <CompanyStocksLoading />
          {selectedCompanyStocks.length ?
            <StocksChartContainer /> : null
          }
        </div>
        {selectedCompanyStocks.length ?
          <PredictPriceContainer /> : null
        }
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
    selectedCompanyStocks: state.tools.selectedCompanyStocks || [],
    defaultStocks: state.tools.defaultStocks || []
  })
)(ToolStocks))