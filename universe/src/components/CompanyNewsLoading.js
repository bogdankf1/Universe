import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { NEWS } from '../constants/ActionTypes'
import { connect } from 'react-redux'
import textConstants from '../constants/textConstants'
import { loadCompanyNewsList } from '../graphql/queries/news'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import { Query } from 'react-apollo'
import Preloader from './Preloader'
import DefaultError from './DefaultError'

const styles = theme => ({
  CompanyNewsSection: {
    maxWidth: 750,
    background: theme.palette.secondary.main,
    borderRadius: 30,
    margin: '0 auto',
    marginTop: 20
  },
  companyNewsItemWrapper: {

  }
})


class CompanyNewsLoading extends Component {
  handleDataLoading = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: NEWS.SAVE_COMPANY_NEWS_LIST,
      payload: data
    })
  }
  render() {
    const { companyNewsList, selectedCompanySymbol = DEFAULT_LOADED_STOCKS[0] } = this.props

    if (companyNewsList.length) {
      return null
    }

    return (
      <Query query={loadCompanyNewsList} variables={{ id: selectedCompanySymbol }}>
        {({ loading, error, data }) => {
          if (loading) return <Preloader />
          if (error) return <DefaultError errorText={textConstants.DATA_LOADING_ERROR} />

          this.handleDataLoading(data.companyNews.list)

          return true
        }}
      </Query>
    )
  }
}

CompanyNewsLoading.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    companyNewsList: state.news.companyNewsList,
    selectedCompanySymbol: state.news.selectedCompanySymbol
  })
)(CompanyNewsLoading))