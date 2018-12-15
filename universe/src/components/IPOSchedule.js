import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOScheduleHead from './IPOScheduleHead'
import IPOScheduleBody from './IPOScheduleBody'
import { IPO_SCHEDULE_FIELDS } from '../constants/app'

const styles = theme => ({
  ipoScheduleHead: {
    width: '100%'
  }
})

class IPOSchedule extends Component {
  getRequiredIpoDataFields = () => {
    const { ipoData } = this.props

    if (!Object.keys(ipoData).length || !ipoData.viewData.length) {
      return []
    }

    return ipoData.viewData.forEach(viewDataItem => {
      return Object.keys(viewDataItem).filter(itemFieldName => {
        return IPO_SCHEDULE_FIELDS.includes(itemFieldName.toUpperCase())
      })
    })
  }
  render() {
    const { classes } = this.props
    const { ipoScheduleHead } = classes
    const scheduleBodyData = this.getRequiredIpoDataFields()

    return (
      <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item className={ipoScheduleHead}>
          <IPOScheduleHead />
        </Grid>
        <Grid item>
          <IPOScheduleBody ipoData={scheduleBodyData} />
        </Grid>
      </Grid>
    )
  }
}

IPOSchedule.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOSchedule))