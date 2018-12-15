import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { loadTodayIPOs } from '../graphql/queries/ipo'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import textConstants from '../constants/textConstants'
import { IPO } from '../constants/ActionTypes'
import { Query } from 'react-apollo'

const styles = theme => ({
  
})

class TodayIPOsLoading extends Component {
  handleDataLoading = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: IPO.SAVE_TODAYS_LIST,
      payload: data
    })
  }
  render() {
    const { todayIPOs } = this.props

    if (Object.keys(todayIPOs).length) {
      return null
    }

    return (
      <Query query={loadTodayIPOs}>
        {({ loading, error, data }) => {
          if (loading) return <Preloader />
          if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />

          this.handleDataLoading(data.todayIPOs.list)

          return true
        }}
      </Query>
    )
  }
}

TodayIPOsLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    todayIPOs: state.ipo.todayIPOs
  })
)(TodayIPOsLoading))