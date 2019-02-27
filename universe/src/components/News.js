import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MarketNewsSection from './MarketNewsSection'
import MarketNewsLoading from './MarketNewsLoading'
import CompanyNewsSection from './CompanyNewsSection'
import AppHeader from './AppHeader'
import MobileMenu from './MobileMenu'
import { Grid } from '@material-ui/core'

const styles = theme => ({
  pageContainer: {
    minHeight: '100vh'
  },
  newsSectionsContainer: {
    padding: 10
  },
  newsSectionItem: {

  }
})


class News extends Component {
  render() {
    const { classes, marketNewsList } = this.props
    const { pageContainer, newsSectionsContainer } = classes

    return (
      <div className={pageContainer}>
        <AppHeader />
        <Grid container className={newsSectionsContainer} justify={'center'} alignItems={'center'} direction={'column'}>
          <Grid item>
            <MarketNewsLoading />
          </Grid>
          <Grid item>
            {marketNewsList.length ?
              <MarketNewsSection newsList={marketNewsList} /> : null
            }
          </Grid>
          <Grid item>
            <CompanyNewsSection />   
          </Grid>
        </Grid>
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