import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      data {
        username
        password
        token
      }
    }
  }
`