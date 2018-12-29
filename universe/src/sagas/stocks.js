import { takeEvery, fork } from 'redux-saga/effects'
import { TOOLS } from '../constants/ActionTypes'

function* loadStocksList() {
  const response = yield fetch('http://127.0.0.1:8080/stocks/list')
    .then((res) => res.json())
  console.log(response)
}

export const stocks = [
  fork(takeEvery, TOOLS.LOAD_STOCKS_LIST.REQUEST, loadStocksList)
]