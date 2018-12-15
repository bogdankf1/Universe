import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import textConstants from '../constants/textConstants'
import IPOInfoTab from './IPOInfoTab'

const styles = theme => ({
  IPOTabsWrapper: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto'
  },
  tabTitle: {
    maxWidth: '100%'
  }
})

class IPOIntervalSelection extends Component {
  constructor(...opts) {
    super(...opts)
    this.state = {
      value: 0,
    }
  }
  handleChange = (event, value) => {
    this.setState({
      value
    })
  }
  handleChangeIndex = index => {
    this.setState({
      value: index
    })
  }
  render() {
    const { classes } = this.props
    const { IPOTabsWrapper, tabTitle } = classes
    const { value } = this.state

    return (
      <div className={IPOTabsWrapper}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor={'secondary'}
          textColor={'secondary'}
          fullWidth
        >
          <Tab className={tabTitle} label={textConstants.TODAY_IPOS} />
          <Tab className={tabTitle} label={textConstants.UPCOMING_IPOS} />
        </Tabs>
        <SwipeableViews
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <IPOInfoTab isTodayIPOs={true} />
          <IPOInfoTab />
        </SwipeableViews>
      </div>
    )
  }
}

IPOIntervalSelection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(IPOIntervalSelection))