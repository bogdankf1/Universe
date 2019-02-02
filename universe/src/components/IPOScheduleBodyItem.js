import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const styles = theme => ({
  scheduleBodyItem: {

  },
  scheduleBodyItemCell: {
    width: 90,
    textAlign: 'center'
  },
  scheduleBodyItemText: {
    color: theme.palette.secondary.light
  }
})

class IPOScheduleBodyItem extends Component {
  render() {
    const { classes, ipoItem } = this.props
    const { scheduleBodyItem, scheduleBodyItemCell, scheduleBodyItemText } = classes
    const ipoItemFields = Object.keys(ipoItem)

    return (
      <Grid container className={scheduleBodyItem} justify={'space-between'} alignItems={'center'}>
        {ipoItemFields.length ? ipoItemFields.map((item, idx) =>
          <Grid item className={scheduleBodyItemCell} key={idx}>
            <Typography variant={'subheading'} className={scheduleBodyItemText}>
              {ipoItem[item]}
            </Typography>
          </Grid>
        ) : null }
      </Grid>
    )
  }
}

IPOScheduleBodyItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOScheduleBodyItem))