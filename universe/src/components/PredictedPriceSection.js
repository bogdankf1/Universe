import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import textConstants from '../constants/textConstants'

const styles = (theme) => ({
  predictedPriceSection: {
    marginTop: 10
  }
})

class PredictedPriceSection extends Component {
  render() {
		const { classes, predictedPrice } = this.props
    const { predictedPriceSection } = classes

    return (
			<Grid container justify={'center'} alignItems={'center'} spacing={8} className={predictedPriceSection}>
        <Grid item>
          <Typography variant="title" component="h3">
            {textConstants.PREDICTED_STOCK_PRICE}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subheading" component="h3">
            {predictedPrice}
          </Typography>
        </Grid>
      </Grid>
     ) 
  }
}

PredictedPriceSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
		predictedPrice: state.prediction.predictedPrice
  })
)(PredictedPriceSection))