import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { PREDICTION_TRAINING_DAYS, EPOCHS_AMOUNTS } from '../constants/app'
import { Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import textConstants from '../constants/textConstants'

const styles = theme => ({
	formControl: {
    minWidth: 180
  },
  whiteColor: {
    color: theme.palette.secondary.light
  }
})

class PredictionTrainingDaysSelect extends Component {
	handleTrainingDaysChange = (event) => {
    const { handleTrainingDaysSelect } = this.props

    handleTrainingDaysSelect(event.target.value)
  }
  handleEpochsChange = (event) => {
    const { handleEpochsSelect } = this.props

    handleEpochsSelect(event.target.value)
  }
  render() {
    const { classes, trainingDays, epochs } = this.props
    const { formControl } = classes

    return (
			<Grid container justify={'center'} alignItems={'center'} spacing={8}>
				<Grid item>
          <FormControl className={formControl}>
            <InputLabel htmlFor="training-days-select">{textConstants.TRAINING_DAYS}</InputLabel>
            <Select
              value={trainingDays}
              onChange={this.handleTrainingDaysChange}
              inputProps={{
                name: 'training-days',
                id: 'training-days-select',
              }}
            >
              {PREDICTION_TRAINING_DAYS.map((item, idx) => 
                <MenuItem key={idx} value={item}>{item}</MenuItem>
              )}
            </Select>
          </FormControl>
      	</Grid>
        <Grid item>
          <FormControl className={formControl}>
            <InputLabel htmlFor="epochs-select">{textConstants.EPOCHS}</InputLabel>
            <Select
              value={epochs}
              onChange={this.handleEpochsChange}
              inputProps={{
                name: 'epochs-days',
                id: 'epochs-select',
              }}
            >
              {EPOCHS_AMOUNTS.map((item, idx) => 
                <MenuItem key={idx} value={item}>{item}</MenuItem>
              )}
            </Select>
          </FormControl>
      	</Grid>
			</Grid>
     ) 
  }
}

PredictionTrainingDaysSelect.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    trainingDays: state.prediction.trainingDays,
		epochs: state.prediction.epochs
  })
)(PredictionTrainingDaysSelect))