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
import routes from '../constants/routes'

const styles = {
  root: {

  },
  headerContainer: {
    backgroundColor: colorTheme.palette.primary.main,
    color: colorTheme.palette.secondary.light
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
  linksItem : {

  }
}


class AppHeader extends Component {
  render() {
    const { root, headerContainer, headerTitle, toolbar, links, linksItem } = this.props.classes
    return (
      <div className={`${root} page-header`}>
        <AppBar position="static" className={headerContainer}>
          <Toolbar className={toolbar}>
            <Typography variant="title" color="inherit" className={`${headerTitle} header-title`}>
              {textConstants.UNIVERSE}
            </Typography>
            <Grid
              container
              justify={'center'}
              className={links}
              spacing={24}
            >
              <Grid item className={linksItem}>
                <Link className="links-item-content" to={routes.APP} >
                  {textConstants.APP}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
              <Grid item className={linksItem}>
                <a className="links-item-content" href="#">
                  {textConstants.ABOUT_US}
                  <div className="links-item-underline" />
                </a>
              </Grid>
              <Grid item className={linksItem}>
                <a className="links-item-content" href="#">
                  {textConstants.PRODUCTS}
                  <div className="links-item-underline" />
                </a>
              </Grid>
              <Grid item>
                <a className="links-item-content" href="#">
                  {textConstants.CONTACT_US}
                  <div className="links-item-underline" />
                </a>
              </Grid>
            </Grid>
            <Grid
              container
              justify={'flex-end'}
            >
              <Grid item>
                <Button color="inherit" className="header-auth-button">
                  {textConstants.LOGIN}
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" className="header-auth-button">
                  {textConstants.REGISTER}
                </Button>
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
    // someProp: state.someReducer.prop
  })
)(AppHeader))