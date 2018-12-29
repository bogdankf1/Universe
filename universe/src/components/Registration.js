import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core'
import { AccountCircle, Https, Email } from '@material-ui/icons'
import { Mutation, ApolloConsumer } from 'react-apollo'
import { REGISTER_USER } from '../graphql/mutations/auth'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import AuthButton from './AuthButton'
import { AUTH } from '../constants/ActionTypes'
import { push } from 'react-router-redux'
import { ROUTES } from '../constants/routes'
import AppHeader from './AppHeader';

const styles = theme => ({
  pageContainer: {
    marginBottom: 20
  },
  registerFormWrapper: {
    height: '100%'
  },
  registerFormContainer: {
    height: 550,
    width: 400,
    borderRadius: 30,
    background: theme.palette.secondary.lightBackground
  },
  registerForm: {
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
  fullWidthField: {
    width: 300
  },
  errorMessage: {
    color: '#D50000',
    marginTop: 10
  }
})


class Registration extends Component {
  constructor(...opts) {
    super(...opts)
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmedPassword: '',
      acceptPolicy: false
    }
  }
  handleCheckboxChange = () => {
    const { acceptPolicy } = this.state

    this.setState({
      acceptPolicy: !acceptPolicy
    })
  }
  handleFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleRegisterBtnClick= (register) => {
    const { firstname, lastname, username, password, confirmedPassword, acceptPolicy } = this.state

    if (!firstname || !lastname || !username || !password || !confirmedPassword || !acceptPolicy) {
      return false
    }

    register({
      variables: {
        firstname,
        lastname,
        username,
        password
      }
    })
  }
  handleSuccessfulRegistration = (user) => {
    const { dispatch } = this.props

    dispatch(push(ROUTES.TOOLS.BASE_PATH))
  }
  setRegisterErrorMessage = () => {
    const { dispatch } = this.props

    dispatch({
      type: AUTH.SET_REGISTER_ERROR_MESSAGE,
      payload: textConstants.USERNAME_IS_ALREADY_USED
    })
  }
  render() {
    const { classes, registerError } = this.props
    const { acceptPolicy } = this.state
    const {
      pageContainer,
      registerFormWrapper,
      registerFormContainer,
      registerForm,
      textField,
      fullWidthField,
      errorMessage
    } = classes

    return (
      <div className={pageContainer}>
        <AppHeader />
        <Grid container className={registerFormWrapper} justify={'center'} alignItems={'center'}>
          <Grid item className={registerFormContainer}>
            <Grid container className={registerForm} justify={'center'} alignItems={'center'} direction={'column'}>
              <Grid item>
                <Typography variant="display1" component="h3">
                  {textConstants.REGISTRATION}
                </Typography>
              </Grid>
              <Grid item className={textField}>
                <TextField
                  required
                  id="firstname"
                  name="firstname"
                  label={textConstants.FIRSTNAME}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.FIRSTNAME_PLACEHOLDER}
                  className={fullWidthField}
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
                  id="lastname"
                  name="lastname"
                  label={textConstants.LASTNAME}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.LASTNAME_PLACEHOLDER}
                  className={fullWidthField}
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
                  id="username"
                  name="username"
                  label={textConstants.EMAIL}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.EMAIL_PLACEHOLDER}
                  className={fullWidthField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
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
                  className={fullWidthField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Https />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item className={textField}>
                <TextField
                  required
                  id="confirmed-password"
                  name="confirmedPassword"
                  type="password"
                  label={textConstants.CONFIRM_PASSWORD}
                  onChange={this.handleFieldChange}
                  placeholder={textConstants.PASSWORD_PLACEHOLDER}
                  className={fullWidthField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Https />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {registerError ?
                <Grid item>
                  <Typography variant="subheading" className={errorMessage}>
                    {registerError}
                  </Typography>
                </Grid> : null
              }
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={acceptPolicy}
                      onChange={this.handleCheckboxChange}
                      value="rememberMe"
                      color="primary"
                    />
                  }
                  label={textConstants.ACCEPT_OUR_POLICY}
                />
              </Grid>
              <Grid item>
                <ApolloConsumer>
                  {client => (
                    <Mutation
                      mutation={REGISTER_USER}
                      onCompleted={({ register }) => {
                        if (register.data) {
                          this.handleSuccessfulRegistration(register.data)
                        } else {
                          this.setRegisterErrorMessage()
                        }
                      }}
                    >
                      {(register, { loading, error }) => {
                        if (loading) return <Preloader />
                        if (error) return <DefaultError />

                        return <AuthButton
                          mutationAction={register}
                          handleButtonClick={this.handleRegisterBtnClick}
                          buttonText={textConstants.REGISTER}
                        />
                      }}
                    </Mutation>
                  )}
                </ApolloConsumer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    registerError: state.auth.registerError
  })
)(Registration))