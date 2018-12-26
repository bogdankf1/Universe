import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Mutation, ApolloConsumer } from 'react-apollo'
import { LOGIN_USER } from '../graphql/mutations/auth'
import Login from './Login'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import { push } from 'react-router-redux'
import { ROUTES } from '../constants/routes'
import { AUTH } from '../constants/ActionTypes';

const styles = theme => ({
  pageContainer: {
    height: 'calc(100vh - 64px)'
  }
})


class LoginPage extends Component {
  setLoggedInUser = (user) => {
    const { dispatch } = this.props

    dispatch({
      type: AUTH.SAVE_LOGGED_IN_USER,
      payload: user
    })

    localStorage.setItem('user', user)

    dispatch(push(ROUTES.TOOLS.BASE_PATH))
  }
  render() {
    const { classes } = this.props
    const { pageContainer } = classes
    
    return (
      <div className={pageContainer}>
        <ApolloConsumer>
          {client => (
            <Mutation
              mutation={LOGIN_USER}
              onCompleted={({ login }) => {
                console.log(login)
                if (login.data) {
                  this.setLoggedInUser(login.data)
                  client.writeData({ data: { isLoggedIn: true } })
                }
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
      </div>
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