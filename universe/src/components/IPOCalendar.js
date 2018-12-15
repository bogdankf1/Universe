import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOIntervalSelection from './IPOIntervalSelection'

const styles = theme => ({
  pageContainer: {
    minHeight: 'calc(100vh - 64px)',
    padding: 20
  },
  itemWrapper: {
    width: '100%'
  }
})


class IPOCalendar extends Component {
  render() {
    const { classes } = this.props
    const { pageContainer, itemWrapper } = classes

    return (
      <div className={pageContainer}>
        <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
          <Grid item className={itemWrapper}>
            <IPOIntervalSelection />
          </Grid>
        </Grid>
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