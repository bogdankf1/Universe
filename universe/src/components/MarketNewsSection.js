import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { NEWS } from '../constants/ActionTypes'
import MainNewsContainer from './MainNewsContainer'
import SecondaryNewsContainer from './SecondaryNewsContainer'

const styles = theme => ({
  marketNewsSection: {

  },
  marketNewsItem: {
    width: '100%',
    marginTop: 20
  }
})


class MarketNewsSection extends Component {
  handleDataLoading = (data) => {
    const { dispatch } = this.props

    dispatch({
      type: NEWS.SAVE_MARKET_NEWS_LIST,
      payload: data
    })
  }
  render() {
    const { classes, newsList } = this.props
    const { marketNewsSection, marketNewsItem } = classes
    const secondaryNewsList = newsList.slice(0, newsList.length)
    secondaryNewsList.shift()

    return (
      <Grid container className={marketNewsSection} justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item className={marketNewsItem}>
          <MainNewsContainer newsItem={newsList[0]} />
        </Grid>
        <Grid item className={marketNewsItem}>
          <SecondaryNewsContainer newsList={secondaryNewsList} />
        </Grid>
      </Grid>
    )
  }
}

MarketNewsSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MarketNewsSection)