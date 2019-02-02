import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOIntervalSelection from './IPOIntervalSelection'
import AppHeader from './AppHeader'
import MobileMenu from './MobileMenu';

const styles = theme => ({
  pageContainer: {
    minHeight: 'calc(100vh - 64px)'
  },
  ipoCalendar: {
    minHeight: 'calc(100vh - 64px)'
  },
  itemWrapper: {
    width: '100%'
  }
})


class IPOCalendar extends Component {
  render() {
    const { classes } = this.props
    const { pageContainer, itemWrapper, ipoCalendar } = classes

    return (
      <div className={pageContainer}>
        <AppHeader />
        <Grid container className={ipoCalendar} alignItems={'center'} direction={'column'}>
          <Grid item className={itemWrapper}>
            <IPOIntervalSelection />
          </Grid>
        </Grid>
        <MobileMenu />
      </div>
    )
  }
}

IPOCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOCalendar))