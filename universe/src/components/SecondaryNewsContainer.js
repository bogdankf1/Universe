import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import NewsItem from './NewsItem';

const styles = theme => ({
  secondaryNewsContainer: {
    maxWidth: 750,
    background: theme.palette.secondary.main,
    borderRadius: 30,
    margin: '0 auto',
    padding: 10
  },
  secondaryNewsItem: {
    padding: 5
  }
})


class SecondaryNewsContainer extends Component {
  render() {
    const { classes, newsList } = this.props
    const { secondaryNewsContainer, secondaryNewsItem } = classes

    return (
      <Grid container className={secondaryNewsContainer} justify={'center'} alignItems={'center'}>
        {newsList.map((newsItem, idx) =>
          <Grid item key={idx} className={secondaryNewsItem}>
            <NewsItem newsItem={newsItem} />
          </Grid>
        )}
      </Grid>
    )
  }
}

SecondaryNewsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(SecondaryNewsContainer))