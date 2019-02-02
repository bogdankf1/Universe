import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MarketNewsSection from './MarketNewsSection'
import MarketNewsLoading from './MarketNewsLoading'
import CompanyNewsSection from './CompanyNewsSection'
import AppHeader from './AppHeader'
import MobileMenu from './MobileMenu'

const styles = theme => ({
  pageContainer: {
    minHeight: '100vh'
  }
})


class News extends Component {
  render() {
    const { classes, marketNewsList } = this.props
    const { pageContainer } = classes

    return (
      <div className={pageContainer}>
        <AppHeader />
        <MarketNewsLoading />
        {marketNewsList.length ?
          <MarketNewsSection newsList={marketNewsList} /> : null
        }
        <CompanyNewsSection />
        <MobileMenu />
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