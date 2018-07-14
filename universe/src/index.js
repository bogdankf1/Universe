import { ConnectedRouter } from 'react-router-redux'
import { getHistory } from './history'
import { configureStore } from './store/configureStore'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

const store = configureStore()
const history = getHistory()

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ),
  document.getElementById('root')
)
