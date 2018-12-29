import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import textConstants from '../constants/textConstants'
import * as tf from '@tensorflow/tfjs'
import Preloader from './Preloader'
import { PREDICTION_TRAINING_DAYS, EPOCHS_AMOUNTS } from '../constants/app'
import PredictionTrainingDaysSelect from './PredictionTrainingDaysSelect'
import { PREDICTION } from '../constants/ActionTypes'
import PredictedPriceSection from './PredictedPriceSection'
import PredictedPriceAnalysis from './PredictedPriceAnalysis'

const styles = (theme) => ({
	button: {
		color: theme.palette.secondary.light,
		backgroundColor: theme.palette.primary.main,
	},
	mainContainer: {
		maxWidth: 500,
    margin: '120px auto 0',
		borderRadius: 30,
		background: theme.palette.secondary.main,
    minHeight: 150,
    paddingTop: 10,
    paddingBottom: 10
	},
	heading: {
		marginBottom: 10
  },
  predictionSettingsItem: {
    marginTop: 20
  }
})

class PredictPriceContainer extends Component {
	constructor(...opts) {
		super(...opts)
		this.state = {
			isSettingsButtonClicked: false,
			showPreloader: false
		}
		this.model = tf.sequential()
		this.tfinterface = null
	}
	componentDidMount() {
		const { dispatch } = this.props

		dispatch({
			type: PREDICTION.SAVE_TRAINING_DAYS_AMOUNT,
			payload: PREDICTION_TRAINING_DAYS[0]
		})

		dispatch({
			type: PREDICTION.SAVE_EPOCHS_AMOUNT,
			payload: EPOCHS_AMOUNTS[0]
		})
	}
	handleSelectSettingsButton = () => {
		this.showPredictionMenu()
	}
	handlePredictButtonClick = () => {
		this.setState({
			showPreloader: true
		})
		
		const initialData = this.preparePredictionInitialData()
		const predictionDate = this.getPredictionDate()

    if (!this.tfinterface) {
		  this.trainNeuralNetwork(initialData)
    }

		this.makePrediction(predictionDate)
	}
	showPredictionMenu = () => {
		this.setState({
			isSettingsButtonClicked: true
		}) 
	}
	getPredictionDate = () => {
		const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		const day = currentDate.getDate()
		const month = currentDate.getMonth() + 1
		const year = currentDate.getFullYear()

		return parseFloat(`${month}.${day}${year}`, 10)
	}
	preparePredictionInitialData = () => {
		const { selectedCompanyStocks, trainingDays } = this.props
		const predictionInitialData = {}
		const stocksData = selectedCompanyStocks.slice(Math.max(selectedCompanyStocks.length - trainingDays, 1))

		predictionInitialData.dates = stocksData.map(stocksItem => {
			const date = stocksItem.date.split('-')
			return parseFloat(`${date[1]}.${date[2]}${date[0]}`, 10)
		})

		predictionInitialData.prices = stocksData.map(stocksItem => {
			return stocksItem.close
		})

		return predictionInitialData
	}
	trainNeuralNetwork = (initialData) => {
		const { epochs } = this.props
		const xs = tf.tensor2d(initialData.dates, [initialData.dates.length, 1])
		const ys = tf.tensor2d(initialData.prices, [initialData.prices.length, 1])
		
		this.model.add(tf.layers.dense({
			units: 1,
			inputShape: [1]
		}))

		const learningRate = 1
		const optimizer = tf.train.adam(learningRate)
		this.model.compile({
			loss: 'meanSquaredError',
			optimizer: optimizer
		})
		
		this.tfinterface = this.model.fit(xs, ys, {epochs: epochs})
	}
	predict = (n) => {
		return this.tfinterface.then(() => {
			return this.model.predict(tf.tensor2d([n], [1, 1]))
		})
	}
	makePrediction = (value) => {
		const { dispatch } = this.props

		this.predict(value).then((res) => {
			dispatch({
				type: PREDICTION.SAVE_PREDICTED_PRICE,
				payload: res.dataSync()[0]
			})
			this.setState({
				showPreloader: false
			})
		})
	}
	handleTrainingDaysSelect = (daysAmount) => {
		const { dispatch } = this.props

		dispatch({
			type: PREDICTION.SAVE_TRAINING_DAYS_AMOUNT,
			payload: daysAmount
    })
    
    this.tfinterface = null
	}
	handleEpochsSelect = (epochs) => {
		const { dispatch } = this.props
		
		dispatch({
			type: PREDICTION.SAVE_EPOCHS_AMOUNT,
			payload: epochs
    })
    
    this.tfinterface = null
	}
  render() {
		const { classes, predictedPrice } = this.props
		const { button, mainContainer, heading, predictionSettingsItem } = classes
		const { isSettingsButtonClicked, showPreloader } = this.state

    return (
			<div className={mainContainer}>
				<Grid container justify={'center'} alignItems={'center'} className={heading}>
					<Grid item>
						<Typography variant="headline" component="h3">
							{textConstants.STOCKS_PRICE_PREDICTION}
						</Typography>
					</Grid>
				</Grid>
				<Grid container justify={'center'} alignItems={'center'} spacing={16}>
					<Grid item>
						<Button
							variant="outlined"
							color={"primary"}
							className={`${button} primary-stock-button`}
							onClick={this.handleSelectSettingsButton}
						>
							{textConstants.SELECT_PREDICTION_SETTINGS}
						</Button>
					</Grid>
				</Grid>
        {isSettingsButtonClicked &&
          <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
            <Grid item className={predictionSettingsItem}>
              <PredictionTrainingDaysSelect
                handleTrainingDaysSelect={this.handleTrainingDaysSelect}
                handleEpochsSelect={this.handleEpochsSelect}
              />
            </Grid>
            <Grid item className={predictionSettingsItem}>
              <Button
                variant="outlined"
                color={"primary"}
                className={`${button} primary-stock-button`}
                onClick={this.handlePredictButtonClick}
              >
                {textConstants.PREDICT_STOCKS_PRICE}
              </Button>
            </Grid>
          </Grid>
				}
				{showPreloader &&
					<Grid container justify={'center'} alignItems={'center'} spacing={16}>
						<Grid item>
							<Preloader />
						</Grid>
					</Grid>
				}
				{predictedPrice ?
					<Grid container justify={'center'} alignItems={'center'} direction={'column'}>
						<Grid item>
							<PredictedPriceSection />
						</Grid>
						<Grid item className={predictionSettingsItem}>
							<PredictedPriceAnalysis />
						</Grid>
					</Grid> : null
				}
			</div>
     ) 
  }
}

PredictPriceContainer.propTypes = {
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
)(PredictPriceContainer))