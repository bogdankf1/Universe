import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { IPO_SCHEDULE_FIELDS } from '../constants/app'
import textConstants from '../constants/textConstants'

const styles = theme => ({
  scheduleHeadContainer: {

  },
  scheduleHeadItem: {
    width: 90,
    textAlign: 'center'
  },
  scheduleHeadItemTitle: {
    color: theme.palette.secondary.light
  }
})

class IPOScheduleHead extends Component {
  render() {
    const { classes } = this.props
    const { scheduleHeadContainer, scheduleHeadItem, scheduleHeadItemTitle } = classes

    return (
      <Grid container className={scheduleHeadContainer} justify={'space-between'} alignItems={'center'}>
        {IPO_SCHEDULE_FIELDS.map((item, idx) =>
          <Grid item className={scheduleHeadItem} key={idx}>
            <Typography variant={'title'} className={scheduleHeadItemTitle}>
              {textConstants[item]}
            </Typography>
          </Grid>
        )}
      </Grid>
    )
  }
}

IPOScheduleHead.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOScheduleHead))