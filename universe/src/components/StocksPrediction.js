import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button, Grid } from '../../node_modules/@material-ui/core'
import textConstants from '../constants/textConstants'
import { push } from 'react-router-redux'
import { ROUTES } from '../constants/routes'
import AppHeader from './AppHeader'

const styles = theme => ({
  button: {
    color: theme.palette.secondary.light,
    marginRight: 20,
    background: theme.palette.primary.light
  },
  predictionContainer: {
    height: 'calc(100vh - 64px)'
  }
})

class StocksPrediction extends Component {
  handleOpenClick = () => {
    const { dispatch } = this.props
    dispatch(push(ROUTES.TOOLS.BASE_PATH))
  }
  loadStocksSymbols = () => {
    const { dispatch } = this.props
    dispatch(push(ROUTES.SYMBOLS.STOCKS))
  }
  render() {
    const { classes } = this.props
    const { predictionContainer } = classes

    return (
      <div className="stocks-page">
        <AppHeader />
        <Grid container justify={'center'} alignItems={'center'} className={predictionContainer}>
          <Grid item>
            <Button
              variant="outlined"
              color={"primary"}
              className={`${classes.button} primary-stock-button`}
              onClick={this.handleOpenClick}
            >
              {textConstants.OPEN_STOCK_MARKET_TOOLS}
            </Button>
          </Grid>
        </Grid>
      </div>
     ) 
  }
}

StocksPrediction.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(StocksPrediction))