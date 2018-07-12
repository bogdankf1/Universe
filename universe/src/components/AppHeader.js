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
    paddingRight: 20
  }
}


class AppHeader extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={`${classes.root} page-header`}>
        <AppBar position="static" className={classes.headerContainer}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="title" color="inherit" className={`${classes.headerTitle} header-title`}>
              {textConstants.UNIVERSE}
            </Typography>
            <Grid
              container
              justify={'center'}
              className={classes.links}
              spacing={10}
            >
              <Grid item className={classes.linksItem}>
                {textConstants.ABOUT_US}
              </Grid>
              <Grid item className={classes.linksItem}>
                {textConstants.PRODUCTS}
              </Grid>
              <Grid item>
                {textConstants.CONTACT_US}
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