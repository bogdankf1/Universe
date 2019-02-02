import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOScheduleHead from './IPOScheduleHead'
import IPOScheduleBody from './IPOScheduleBody'

const styles = theme => ({
  ipoScheduleHead: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.secondary.main
  },
  ipoScheduleBody: {
    width: '100%',
    paddingTop: 10
  }
})

class IPOSchedule extends Component {
  getRequiredIpoDataFields = () => {
    const { ipoData } = this.props

    if (!Object.keys(ipoData).length || !ipoData.viewData.length) {
      return []
    }

    return ipoData.viewData.map(viewDataItem => {
      return {
        Company: viewDataItem.Company,
        Symbol: viewDataItem.Symbol,
        Market: viewDataItem.Market,
        Price: viewDataItem.Price,
        Amount: viewDataItem.Amount,
        Expected: viewDataItem.Expected
      }
    })
  }
  render() {
    const { classes } = this.props
    const { ipoScheduleHead, ipoScheduleBody } = classes
    const scheduleBodyData = this.getRequiredIpoDataFields()
    console.log("scheduleBodyData", scheduleBodyData)

    return (
      <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item className={ipoScheduleHead}>
          <IPOScheduleHead />
        </Grid>
        <Grid item className={ipoScheduleBody}>
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