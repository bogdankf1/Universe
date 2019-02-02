import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import colorTheme from '../utils/colorTheme'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { AUTH, UI } from '../constants/ActionTypes'

const styles = {
  headerContainer: {
    backgroundColor: 'transparent',
    color: colorTheme.palette.secondary.light,
    boxShadow: 'none'
  },
  toolbar: {
    justifyContent: 'space-between',
    paddingLeft: 100,
    paddingRight: 100
  },
  links: {
    textTransform: 'uppercase',
    paddingLeft: 50,
    fontSize: 14
  },
  headerAuthBtn: {
    background: '#ffffff21'
  },
  greetingMessage: {
    color: '#ffffff'
  },
  pageHeader: {
    fontFamily: 'Roboto'
  },
  linksItemUnderline: {
    height: 2,
    width: '100%',
    position: 'absolute',
    background: '#ffffffb0',
    marginTop: 5,
    transition: 'ease .3s',
    opacity: 0,
    visibility: 'hidden'
  },
  linksItemContent: {
    position: 'relative',
    userSelect: 'none',
    '&:link': {
      textDecoration: 'none',
      color: 'inherit'
    },
    '&:visited': {
      textDecoration: 'none',
      color: 'inherit'
    },
    '&:hover': {
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer'
    },
    '&:hover .links-item-underline': {
      opacity: 1,
      transition: 'opacity .1s linear',
      visibility: 'visible'
    },
    '&:active': {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
}


class AppHeader extends Component {
  logout = () => {
    const { dispatch } = this.props

    dispatch({
      type: AUTH.LOGOUT
    })

    localStorage.removeItem('user')
  }
  showMenu = () => {
    const { dispatch } = this.props

    dispatch({
      type: UI.MOBILE_MENU_SHOW
    })
  }
  render() {
    const { classes, isLoggedIn, user } = this.props
    const {
      headerContainer,
      toolbar,
      links,
      headerAuthBtn,
      greetingMessage,
      pageHeader,
      linksItemContent,
    } = classes

    return (
      <div className={`${pageHeader} page-header`}>
        <AppBar position="static" className={headerContainer}>
          <Toolbar className={`${toolbar} header-toolbar`}>
            <Typography variant="title" color="inherit" className={`header-title`}>
              <Link className={linksItemContent} to={ROUTES.APP.HOME} > 
                {textConstants.UNIVERSE}
              </Link>
            </Typography>
            <Grid container justify={'flex-start'} className={`${links} header-links`} spacing={24}>
              <Grid item>
                <Link className={linksItemContent} to={ROUTES.APP.BASE_PATH} >
                  {textConstants.STOCK_MARKET}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
              <Grid item>
                <Link className={linksItemContent} to={ROUTES.APP.NEWS} >
                  {textConstants.NEWS}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
              <Grid item>
                <Link className={linksItemContent} to={ROUTES.APP.IPO_CALENDAR} >
                  {textConstants.IPO_CALENDAR}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
            </Grid>
            <Grid container justify={'flex-end'} alignItems={'center'} spacing={8}>
              <Grid item className={'auth-buttons-container'}>
                {!isLoggedIn ?
                  <Link className={linksItemContent} to={ROUTES.APP.REGISTER} > 
                    <Button color="inherit" className={headerAuthBtn}>
                      {textConstants.REGISTER}
                    </Button>
                  </Link> :
                  <Button color="inherit" className={headerAuthBtn} onClick={this.logout}>
                    {textConstants.LOGOUT}
                  </Button>
                }
              </Grid>
              <Grid item className={'auth-buttons-container'}>
                {!isLoggedIn ?
                  <Link className={linksItemContent} to={ROUTES.APP.LOGIN} > 
                    <Button color="inherit" className={headerAuthBtn}>
                      {textConstants.LOGIN}
                    </Button>
                  </Link> :
                  <Typography variant="subheading" className={greetingMessage}>
                    {`${textConstants.WELCOME}${user.username}!`}
                  </Typography>
                }
              </Grid>
              <Grid item className={'menu-icon'} onClick={this.showMenu}>
                <i className="material-icons">menu</i>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  })
)(AppHeader))