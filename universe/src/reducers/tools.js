import { TOOLS } from '../constants/ActionTypes'

const initialState = {}

export default function tools(state = initialState, action) {
  switch(action.type) {
    case TOOLS.SET_TOOL_NAME:
      return {...state, toolName: action.payload}
    case TOOLS.SAVE_DEFAULT_STOCKS_NAMES_LIST:
      return {...state, defaultStocks: action.payload}
    default:
      return state
  }
}