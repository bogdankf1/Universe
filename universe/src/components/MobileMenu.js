import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { MOBILE_MENU_ITEMS } from '../constants/app'
import { Link } from 'react-router-dom'
import { UI } from '../constants/ActionTypes'
import textConstants from '../constants/textConstants'

const styles = theme => ({
  mobileMenuWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.dark,
    zIndex: 2,
    opacity: .8,
    userSelect: 'none',
    paddingTop: 20
  },
  mobileMenuItem: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20
  },
  mobileMenuItemLink: {
    width: '100%',
    height: '100%',
    textDecoration: 'none'
  },
  mobileMenuItemText: {
    color: theme.palette.secondary.light
  },
  closeIcon: {
    color: theme.palette.secondary.light,
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer'
  },
  mobileMenuTitle: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20
  },
  mobileMenuTitleText: {
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.secondary.light,
    borderBottomStyle: 'solid'
  }
})

class MobileMenu extends Component {
  componentWillUnmount() {
    const { isVisible } = this.props

    if (isVisible) {
      this.closeMenu()
    }
  }
  closeMenu = () => {
    const { dispatch } = this.props

    dispatch({
      type: UI.MOBILE_MENU_HIDE
    })
  }
  render() {
    const { classes, isVisible } = this.props
    const {
      mobileMenuWrapper,
      mobileMenuItem,
      mobileMenuItemLink,
      mobileMenuItemText,
      closeIcon,
      mobileMenuTitle,
      mobileMenuTitleText
    } = classes

     return (isVisible ?
      <div className={mobileMenuWrapper}>
        <div className={closeIcon} onClick={this.closeMenu}>
          <i className="material-icons">close</i>
        </div>
        <Grid container direction={'column'} alignItems={'center'}>
          <Grid item className={mobileMenuItem}>
            <div className={mobileMenuTitle}>
              <Typography variant="display1" className={`${mobileMenuItemText} ${mobileMenuTitleText}`}>
                {textConstants.MENU}
              </Typography>
            </div>
          </Grid>
          {MOBILE_MENU_ITEMS.map((menuItem, idx) =>
            <Grid item className={mobileMenuItem} key={idx}>
              <Link to={menuItem.route} className={mobileMenuItemLink}>
                <Typography variant="display1" className={mobileMenuItemText}>
                  {menuItem.title}
                </Typography>
              </Link>
            </Grid>
          )}
        </Grid>
      </div> : null
     ) 
  }
}

MobileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    isVisible: state.ui.mobileMenu.visible,
    isLoggedIn: state.auth.isLoggedIn
  })
)(MobileMenu))