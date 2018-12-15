import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { loadUpcomingIPOs } from '../graphql/queries/ipo'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import textConstants from '../constants/textConstants'
import { IPO } from '../constants/ActionTypes'
import { Query } from 'react-apollo'

const styles = theme => ({
  
})

class UpcomingIPOsLoading extends Component {
  handleDataLoading = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: IPO.SAVE_UPCOMINGS_LIST,
      payload: data
    })
  }
  render() {
    const { upcomingIPOs } = this.props

    if (Object.keys(upcomingIPOs).length) {
      return null
    }

    return (
      <Query query={loadUpcomingIPOs}>
        {({ loading, error, data }) => {
          if (loading) return <Preloader />
          if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />

          this.handleDataLoading(data.upcomingIPOs.list)

          return true
        }}
      </Query>
    )
  }
}

UpcomingIPOsLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    upcomingIPOs: state.ipo.upcomingIPOs
  })
)(UpcomingIPOsLoading))