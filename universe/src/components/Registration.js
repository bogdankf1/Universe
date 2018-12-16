import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, TextField, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core'
import { AccountCircle, Https, Email } from '@material-ui/icons'

const styles = theme => ({
  pageContainer: {
    // height: 'calc(100vh - 64px)'
    marginTop: 20,
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
  handleRegisterBtnClick= () => {
    const { firstname, lastname, username, password, confirmedPassword, acceptPolicy } = this.state

    if (!firstname || !lastname || !username || !password || !confirmedPassword || !acceptPolicy) {
      return false
    }
  }
  render() {
    const { classes } = this.props
    const { acceptPolicy } = this.state
    const {
      pageContainer,
      registerFormWrapper,
      registerFormContainer,
      registerForm,
      textField,
      button,
      fullWidthField
    } = classes

    return (
      <div className={pageContainer}>
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
                <Button
                  variant="outlined"
                  color="primary"
                  className={button}
                  onClick={this.handleOpenClick}
                >
                  {textConstants.REGISTER}
                </Button>
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
    
  })
)(Registration))