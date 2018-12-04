import {  SYMBOLS } from '../constants/ActionTypes'

const initialState = {
  stocksSymbols: []
}

export default function symbols(state = initialState, action) {
  switch (action.type) {
    case SYMBOLS.SAVE_LIST:
      return {...state, stocksSymbols: action.payload}
    default:
      return state
  }
}