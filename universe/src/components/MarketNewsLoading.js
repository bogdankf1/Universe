import React, { Component } from 'react'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadNewsList } from '../graphql/queries/news'
import Preloader from './Preloader'
import DefaultError from './DefaultError'
import { NEWS } from '../constants/ActionTypes'

const styles = theme => ({})


class MarketNewsLoading extends Component {
  handleDataLoading = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: NEWS.SAVE_MARKET_NEWS_LIST,
      payload: data
    })
  }
  render() {
    const { marketNewsList } = this.props
    
    if (marketNewsList.length) {
      return null
    }
    
    return (
      <Query query={loadNewsList}>
        {({ loading, error, data }) => {
          if (loading) return <Preloader />
          if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />

          this.handleDataLoading(data.news.list)

          return true
        }}
      </Query>
    )
  }
}

MarketNewsLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(MarketNewsLoading))