import { TOOLS } from '../constants/ActionTypes'

const initialState = {}

export default function tools(state = initialState, action) {
  switch(action.type) {
    case TOOLS.SET_TOOL_NAME:
      return {...state, toolName: action.payload}
    case TOOLS.SAVE_DEFAULT_STOCKS_NAMES_LIST:
      return {...state, defaultStocks: action.payload}
    case TOOLS.SAVE_SELECTED_COMPANY_NAME:
      return {...state, selectedCompany: action.payload}
    case TOOLS.SAVE_SELECTED_COMPANY_STOCKS_LIST:
      return {...state, selectedCompanyStocks: action.payload}
    case TOOLS.CLEAR_SELECTED_COMPANY_STOCKS_LIST:
      return {...state, selectedCompanyStocks: null}
    case TOOLS.SAVE_CURRENT_RANGE:
      return {...state, currentRange: action.payload}
    case TOOLS.SAVE_CRYPTOCURRENCIES_DATA:
      return {...state, cryptoCurrencies: action.payload}
    default:
      return state
  }
}