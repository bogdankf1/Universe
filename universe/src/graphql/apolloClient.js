import ApolloClient from 'apollo-boost'
import { hostname, port, graphqlPath } from '../constants/server'

export const createApolloClient = () => {
  const client = new ApolloClient({
    uri: `http://${hostname}:${port}/${graphqlPath}`,
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  return client
}