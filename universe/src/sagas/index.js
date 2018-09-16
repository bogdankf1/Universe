import { stocks } from './stocks'
import { all, fork } from 'redux-saga/effects'
import logActions from './logActions'

export default function* rootSaga(store) {
  yield all([
    ...stocks
  ])
  yield fork(logActions, store)
}