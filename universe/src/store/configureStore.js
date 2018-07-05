import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducers from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { getHistory } from '../history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (initialState = {}) => {
  const saga = createSagaMiddleware()
  const router = routerMiddleware(getHistory())
  const reducer = combineReducers({
    router: routerReducer,
    ...reducers,
  })
  const enhancer = composeEnhancers(
    applyMiddleware(saga, router)
  )
  const store = createStore(reducer, initialState, enhancer)

  saga.run(rootSaga, store)

  return {
    ...store,
    getReducer() {
      return reducer
    }
  }
}
