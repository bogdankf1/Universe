import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { DEFAULT_STOCKS_RANGE } from '../constants/app'
import { TOOLS, UI } from '../constants/ActionTypes'
import { Typography, Button, Grid } from '@material-ui/core'
import StocksChartContainer from './StocksChartContainer'
import CompanyStocksLoading from './CompanyStocksLoading'
import RangesContainer from './RangesContainer'
import CompaniesCardsContainer from './CompaniesCardsContainer'
import DefaultStocksLoading from './DefaultStocksLoading'
import AutoCompleteInput from './AutoCompleteInput'
import SymbolsLoading from './SymbolsLoading'
import PredictionPopup from './PredictionPopup'
import textConstants from '../constants/textConstants'

const styles = theme => ({
  toolsStocksContainer: {
    position: 'relative',
    padding: 20,
    paddingBottom: 50,
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      paddingBottom: 50
		}
  },
  stocksChartContainer: {
    height: 300,
    [theme.breakpoints.down("xs")]: {
			paddingTop: 15
		}
  },
  companyNameTitle: {
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
			fontSize: '1.5rem'
		}
  },
  toolStocksHeading: {
    color: theme.palette.secondary.light,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: '1rem',
      paddingTop: 15
    }
  },
  predictionButtonContainer: {
    marginTop: 12
  },
  predictionButton: {
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#81c784'
    }
  },
  predictionButtonText: {
    color: theme.palette.secondary.light
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
  handlePredictionButtonClick = () => {
    const { dispatch } = this.props

    dispatch({
      type: UI.PREDICTION_POPUP_SHOW
    })
  }
  render() {
    const { companiesList, classes, selectedCompanyStocks, selectedCompany } = this.props
    const {
      stocksChartContainer,
      toolsStocksContainer,
      companyNameTitle,
      toolStocksHeading,
      predictionButtonContainer,
      predictionButton,
      predictionButtonText
    } = classes

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
        {selectedCompanyStocks.length ?
          <Grid container justify={'center'} alignItems={'center'} className={predictionButtonContainer}>
            <Grid item>
              <Button
                className={predictionButton}
                variant="contained"
                onClick={this.handlePredictionButtonClick}
              >
                <Typography variant="button" className={predictionButtonText}>
                  {textConstants.PREDICT_STOCKS_PRICE}
                </Typography>
              </Button>
            </Grid>
          </Grid> : null
        }
        <div className={stocksChartContainer}>
          <Typography className={companyNameTitle} variant="display1" component="h3">
            {selectedCompany.companyName}
          </Typography>
          <CompanyStocksLoading />
          {selectedCompanyStocks.length ?
            <StocksChartContainer /> : null
          }
        </div>
        <PredictionPopup />
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