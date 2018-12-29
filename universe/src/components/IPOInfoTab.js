import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import TodayIPOsLoading from './TodayIPOsLoading'
import UpcomingIPOsLoading from './UpcomingIPOsLoading'
import IPOSchedule from './IPOSchedule'

const styles = theme => ({
  infoScheduleContainer: {
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})

class IPOInfoTab extends Component {
  render() {
    const { classes, isTodayIPOs, todayIPOs, upcomingIPOs } = this.props
    const { infoScheduleContainer } = classes

    return (
      <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item>
          {isTodayIPOs ?
            <TodayIPOsLoading /> :
            <UpcomingIPOsLoading />
          }
        </Grid>
        <Grid item className={infoScheduleContainer}>
          <IPOSchedule ipoData={isTodayIPOs ? todayIPOs : upcomingIPOs} />
        </Grid>
      </Grid>
    )
  }
}

IPOInfoTab.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    todayIPOs: state.ipo.todayIPOs,
    upcomingIPOs: state.ipo.upcomingIPOs
  })
)(IPOInfoTab))