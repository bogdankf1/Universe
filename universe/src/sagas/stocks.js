import { takeEvery, fork } from 'redux-saga/effects'
import { STOCK_MARKET_TOOLS } from '../constants/ActionTypes'

function* loadStocksList() {
  const response = yield fetch('http://192.168.1.7:3001/stocks/list')
    .then((res) => res.json())
  console.log(response)
}

export const stocks = [
  fork(takeEvery, STOCK_MARKET_TOOLS.LOAD_STOCKS_LIST.REQUEST, loadStocksList)
]