import { STOCK_MARKET_TOOLS } from '../constants/ActionTypes'

const initialState = {}

export default function stockMarketTools(state = initialState, action) {
  switch(action.type) {
    case STOCK_MARKET_TOOLS.SET_TOOL_NAME:
      return {...state, toolName: action.payload}
    case STOCK_MARKET_TOOLS.SAVE_SYMBOLS_LIST:
      return {...state, stocksSymbols: action.payload}
    default:
      return state
  }
}