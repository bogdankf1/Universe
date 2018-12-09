import { NEWS } from '../constants/ActionTypes'

const initialState = {
  marketNewsList: [],
  companyNewsList: []
}

export default function news(state = initialState, action) {
  switch (action.type) {
    case NEWS.SAVE_MARKET_NEWS_LIST:
      return {...state, marketNewsList: action.payload}
    case NEWS.SAVE_COMPANY_NEWS_LIST:
      return {...state, companyNewsList: action.payload}
    case NEWS.CLEAR_COMPANY_NEWS_LIST:
      return {...state, companyNewsList: []}
    case NEWS.SAVE_COMPANY_SYMBOL:
      return {...state, selectedCompanySymbol: action.payload}
    default:
      return state
  }
}