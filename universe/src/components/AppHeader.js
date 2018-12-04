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

const styles = {
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
  headerAuthBtn: {
    background: '#ffffff21'
  }
}


class AppHeader extends Component {
  render() {
    const { classes } = this.props
    const { headerContainer, headerTitle, toolbar, links, linksItem, headerAuthBtn } = classes

    return (
      <div className={`page-header`}>
        <AppBar position="static" className={headerContainer}>
          <Toolbar className={toolbar}>
            <Typography variant="title" color="inherit" className={`${headerTitle} header-title`}>
              <Link className="links-item-content" to={ROUTES.APP.HOME} > 
                {textConstants.UNIVERSE}
              </Link>
            </Typography>
            <Grid container justify={'flex-start'} className={links} spacing={24}>
              <Grid item className={linksItem}>
                <Link className="links-item-content" to={ROUTES.APP.BASE_PATH} >
                  {textConstants.STOCK_MARKET}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
              <Grid item className={linksItem}>
                <Link className="links-item-content" to={ROUTES.APP.NEWS} >
                  {textConstants.NEWS}
                  <div className="links-item-underline" />
                </Link>
              </Grid>
            </Grid>
            <Grid container justify={'flex-end'} spacing={8}>
              <Grid item>
                <Button color="inherit" className={headerAuthBtn}>
                  <Link className="links-item-content" to={ROUTES.APP.LOGIN} > 
                    {textConstants.LOGIN}
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" className={headerAuthBtn}>
                  <Link className="links-item-content" to={ROUTES.APP.REGISTER} > 
                    {textConstants.REGISTER}
                  </Link>
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

  })
)(AppHeader))