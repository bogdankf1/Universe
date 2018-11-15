import { PREDICTION } from '../constants/ActionTypes'

const initialState = {
    trainingDays: 0,
    epochs: 0,
    predictedPrice: 0
}

export default function prediction(state = initialState, action) {
  switch(action.type) {
    case PREDICTION.SAVE_TRAINING_DAYS_AMOUNT:
      return {...state, trainingDays: action.payload}
    case PREDICTION.SAVE_EPOCHS_AMOUNT:
      return {...state, epochs: action.payload}
    case PREDICTION.SAVE_PREDICTED_PRICE:
      return {...state, predictedPrice: action.payload}
    default:
      return state
  }
}