import ApolloClient from 'apollo-boost'
import { hostname, port, graphqlPath } from '../constants/server'

export const createApolloClient = () => {
  const client = new ApolloClient({
    uri: `http://${hostname}:${port}/${graphqlPath}`
  })
  return client
}