import ApolloClient from 'apollo-boost'

export const createApolloClient = () => {
  const client = new ApolloClient({
    uri: "http://192.168.1.132:3001/graphql"
  })
  return client
}