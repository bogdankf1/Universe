import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOScheduleBodyItem from './IPOScheduleBodyItem'

const styles = theme => ({
  scheduleBodyContainer: {

  },
  scheduleBodyItem: {
    width: '100%',
    padding: 5,
    '&:nth-child(2n + 1)': {
      backgroundColor: theme.palette.primary.darkText
    }
  }
})

class IPOScheduleBody extends Component {
  render() {
    const { classes, ipoData } = this.props
    const { scheduleBodyContainer, scheduleBodyItem } = classes
    console.log(ipoData)
    return (
      <Grid container className={scheduleBodyContainer} justify={'space-between'} alignItems={'center'}>
        {ipoData.length ? ipoData.map((ipoItem, idx) =>
          <Grid item key={idx} className={scheduleBodyItem}>
            <IPOScheduleBodyItem ipoItem={ipoItem} />
          </Grid>
        ) : null}
      </Grid>
    )
  }
}

IPOScheduleBody.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOScheduleBody))