import { ConnectedRouter } from 'react-router-redux'
import { getHistory } from './history'
import { configureStore } from './store/configureStore'
import { createApolloClient } from './graphql/apolloClient'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import theme from './utils/colorTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import './index.css'

const store = configureStore()
const history = getHistory()
const client = createApolloClient()

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
)
