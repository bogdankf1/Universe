import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography, TextField, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core'
import { AccountCircle, Https } from '@material-ui/icons'
import { ROUTES } from '../constants/routes'

const styles = theme => ({
  pageContainer: {
    height: 'calc(100vh - 64px)'
  },
  loginFormWrapper: {
    height: '100%'
  },
  loginFormContainer: {
    height: 400,
    width: 400,
    borderRadius: 30,
    background: theme.palette.secondary.lightBackground
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
  handleCheckboxChange = () => {
    const { rememberMe } = this.state

    this.setState({
      rememberMe: !rememberMe
    })
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    const { classes } = this.props
    const { username, password, rememberMe } = this.state
    const { pageContainer, loginFormWrapper, loginFormContainer, loginForm, textField, button } = classes

    console.log(username, password, rememberMe)
    return (
      <div className={pageContainer}>
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
                  label={textConstants.USERNAME_OR_EMAIL}
                  onChange={this.handleUsernameChange}
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
                  type="password"
                  label={textConstants.PASSWORD}
                  onChange={this.handlePasswordChange}
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
                <Button
                  variant="outlined"
                  color="primary"
                  className={button}
                  onClick={this.handleOpenClick}
                >
                  {textConstants.LOGIN}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(Login))