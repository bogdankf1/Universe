import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'
import AboutUsCard from './AboutUsCard'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader';

const styles = theme => ({
  mobileMenuWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.dark
  }
})

class MobileMenu extends Component {
  render() {
    const { classes } = this.props
    const { mobileMenuWrapper } = classes

     return (
      <div className={mobileMenuWrapper}>
        
      </div>
     ) 
  }
}

MobileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    isVisible: state.ui.mobileMenu.visible
  })
)(MobileMenu))