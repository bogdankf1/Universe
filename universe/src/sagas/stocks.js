import { takeEvery, fork } from 'redux-saga/effects'
import { STOCK_MARKET_TOOLS } from '../constants/ActionTypes'

function* loadStocksList() {
  const response = yield fetch('http://127.0.0.1:8080/stocks/list')
    .then((res) => res.json())
  console.log(response)
}

export const stocks = [
  fork(takeEvery, STOCK_MARKET_TOOLS.LOAD_STOCKS_LIST.REQUEST, loadStocksList)
]