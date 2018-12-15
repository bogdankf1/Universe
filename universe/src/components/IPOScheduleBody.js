import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import IPOScheduleBodyItem from './IPOScheduleBodyItem'

const styles = theme => ({
  scheduleBodyContainer: {

  }
})

class IPOScheduleBody extends Component {
  render() {
    const { classes, ipoData } = this.props
    const { scheduleBodyContainer } = classes

    return (
      <Grid container className={scheduleBodyContainer} justify={'center'} alignItems={'center'}>
        {ipoData.length ? ipoData.map((ipoItem, idx) =>
          <Grid item key={idx}>
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