import { ConnectedRouter } from 'react-router-redux'
import { getHistory } from './history'
import { configureStore } from './store/configureStore'
import { createApolloClient } from './graphql/apolloClient'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import gql from "graphql-tag"

const store = configureStore()
const history = getHistory()
const client = createApolloClient()

console.log(client)
client
  .query({
    query: gql`
      {
        stocks(id: "AAPL, MSFT") {
          list
        }
      }
    `
  })
  .then(result => console.log(JSON.parse(result.data.stocks.list)))
ReactDOM.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
