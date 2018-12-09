import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MarketNewsSection from './MarketNewsSection'
import MarketNewsLoading from './MarketNewsLoading'
import CompanyNewsSection from './CompanyNewsSection'

const styles = theme => ({
  pageContainer: {
    minHeight: 'calc(100vh - 64px)',
    padding: 20
  }
})


class News extends Component {
  render() {
    const { classes, marketNewsList } = this.props
    const { pageContainer } = classes

    return (
      <div className={pageContainer}>
        <MarketNewsLoading />
        {marketNewsList.length ?
          <MarketNewsSection newsList={marketNewsList} /> : null
        }
        <CompanyNewsSection />
      </div>
    )
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(News))