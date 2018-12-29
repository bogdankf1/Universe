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

export const REGISTER_USER = gql`
  mutation ($firstname: String!, $lastname: String!, $username: String!, $password: String!) {
    register(firstname: $firstname, lastname: $lastname, username: $username, password: $password) {
      data {
        username
      }
    }
  }
`