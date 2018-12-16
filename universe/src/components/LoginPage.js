import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Mutation, ApolloConsumer } from 'react-apollo'
import { LOGIN_USER } from '../graphql/mutations/auth'
import Login from './Login'
import Preloader from './Preloader'
import DefaultError from './DefaultError'

const styles = theme => ({
  pageContainer: {
    height: 'calc(100vh - 64px)'
  }
})


class LoginPage extends Component {
  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={LOGIN_USER}
            onCompleted={({ login }) => {
              localStorage.setItem('token', login)
              client.writeData({ data: { isLoggedIn: true } })
            }}
          >
            {(login, { loading, error }) => {
              if (loading) return <Preloader />
              if (error) return <DefaultError />

              return <Login login={login} />
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    )
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(LoginPage))