import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import textConstants from '../constants/textConstants'

const styles = (theme) => ({
	button: {
		color: theme.palette.secondary.light,
		backgroundColor: theme.palette.primary.main,
  },
  greenRaisingTitle: {
    color: '#2E7D32'
  },
  redRaisingTitle: {
    color: '#D50000'
  }
})

class PredictedPriceAnalysis extends Component {
  getPriceRaisingDifference = () => {
    const { predictedPrice, selectedCompanyStocks } = this.props

    return predictedPrice - selectedCompanyStocks[selectedCompanyStocks.length - 1].close
  }
  render() {
		const { classes } = this.props
    const { greenRaisingTitle, redRaisingTitle } = classes
    const raisingDifference = this.getPriceRaisingDifference()

    return (
			<Grid container justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item>
          {raisingDifference > 0 ?
            <Typography variant="title" component="h3" className={greenRaisingTitle}>
              {textConstants.COMPANY_STOCKS_WILL_RISE}
            </Typography> :
            <Typography variant="title" component="h3" className={redRaisingTitle}>
              {textConstants.COMPANY_STOCKS_WILL_FALL}
            </Typography>
          }
        </Grid>
        <Grid item>
          <Grid container justify={'center'} alignItems={'center'} spacing={8}>
            <Grid item>
              {textConstants.RAISING_DIFFERENCE}
            </Grid>
            <Grid item>
              {raisingDifference > 0 ?
                <Typography variant="subheading" component="h3" className={greenRaisingTitle}>
                  {`+${raisingDifference}`}
                </Typography> :
                <Typography variant="subheading" component="h3" className={redRaisingTitle}>
                  {raisingDifference}
                </Typography>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     ) 
  }
}

PredictedPriceAnalysis.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    selectedCompany: state.tools.selectedCompany || {},
		selectedCompanyStocks: state.tools.selectedCompanyStocks || [],
		trainingDays: state.prediction.trainingDays,
		epochs: state.prediction.epochs,
		predictedPrice: state.prediction.predictedPrice
  })
)(PredictedPriceAnalysis))