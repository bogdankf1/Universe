import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core'
import { AccountCircle, Https } from '@material-ui/icons'
import { AUTH } from '../constants/ActionTypes'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import { Mutation, ApolloConsumer } from 'react-apollo'
import { LOGIN_USER } from '../graphql/mutations/auth'
import { push } from 'react-router-redux'
import { ROUTES } from '../constants/routes'
import AuthButton from './AuthButton'
import AppHeader from './AppHeader';
import MobileMenu from './MobileMenu';

const styles = theme => ({
  pageContainer: {
    height: '100vh'
  },
  loginFormWrapper: {
    height: 'calc(100vh - 64px)',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20
  },
  loginFormContainer: {
    height: 400,
    width: 400,
    borderRadius: 30,
    background: 'rgba(209, 209, 209, 0.5)'
  },
  loginForm: {
    height: '100%'
  },
  textField: {
    marginTop: 15
  },
  button: {
    minWidth: 180,
    backgroundColor: '#01579B',
    color: '#FFFFFF'
  },
  errorMessage: {
    color: '#D50000',
    marginTop: 10
  }
})


class Login extends Component {
  constructor(...opts) {
    super(...opts)
    this.state = {
      username: '',
      password: '',
      rememberMe: false
    }
  }
  componentWillUnmount() {
    const { dispatch, loginError } = this.props

    if (loginError) {
      dispatch({
        type: AUTH.CLEAR_LOGIN_ERROR_MESSAGE
      })
    }
  }
  handleCheckboxChange = () => {
    const { rememberMe } = this.state

    this.setState({
      rememberMe: !rememberMe
    })
  }
  handleFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleLoginBtnClick = (login) => {
    const { username, password } = this.state

    if (!username || !password) {
      return false
    }
    
    login({
      variables: {
        username,
        password
      }
    })
  }
  setLoggedInUser = (user) => {
    const { dispatch } = this.props

    dispatch({
      type: AUTH.SAVE_LOGGED_IN_USER,
      payload: user
    })

    localStorage.setItem('user', user)

    dispatch(push(ROUTES.TOOLS.BASE_PATH))
  }
  setLoginErrorMessage = () => {
    const { dispatch } = this.props

    dispatch({
      type: AUTH.SET_LOGIN_ERROR_MESSAGE,
      payload: textConstants.INVALID_USERNAME_OR_PASSWORD
    })
  }
  render() {
    const { classes, loginError } = this.props
    const { rememberMe } = this.state
    const {
      pageContainer,
      loginFormWrapper,
      loginFormContainer,
      loginForm,
      textField,
      errorMessage
    } = classes

    return (
      <div className={`${pageContainer} default-page`}>
        <AppHeader />
        <Grid container className={loginFormWrapper} justify={'center'} alignItems={'center'}>
          <Grid item className={loginFormContainer}>
            <Grid container className={loginForm} justify={'center'} alignItems={'center'} direction={'column'}>
              <Grid item>
                <Typography variant="display1" component="h3">
                  {textConstants.LOGIN}
                </Typography>
              </Grid>
              <Grid item className={textField}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label={textConstants.USERNAME_OR_EMAIL}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.EMAIL_PLACEHOLDER}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item className={textField}>
                <TextField
                  required
                  id="password"
                  name="password"
                  type="password"
                  label={textConstants.PASSWORD}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.PASSWORD_PLACEHOLDER}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Https />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {loginError ?
                <Grid item>
                  <Typography variant="subheading" className={errorMessage}>
                    {loginError}
                  </Typography>
                </Grid> : null
              }
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={this.handleCheckboxChange}
                      value="rememberMe"
                      color="primary"
                    />
                  }
                  label={textConstants.REMEMBER_ME}
                />
              </Grid>
              <Grid item>
                <ApolloConsumer>
                  {client => (
                    <Mutation
                      mutation={LOGIN_USER}
                      onCompleted={({ login }) => {
                        if (login.data) {
                          this.setLoggedInUser(login.data)
                          client.writeData({ data: { isLoggedIn: true } })
                        } else {
                          this.setLoginErrorMessage()
                        }
                      }}
                    >
                      {(login, { loading, error }) => {
                        if (loading) return <Preloader />
                        if (error) return <DefaultError />

                        return <AuthButton
                          mutationAction={login}
                          handleButtonClick={this.handleLoginBtnClick}
                          buttonText={textConstants.LOGIN}
                        />
                      }}
                    </Mutation>
                  )}
                </ApolloConsumer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <MobileMenu />
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    loginError: state.auth.loginError
  })
)(Login))