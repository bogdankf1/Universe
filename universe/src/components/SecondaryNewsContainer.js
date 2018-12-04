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
    margin: '0 auto'
  }
})


class SecondaryNewsContainer extends Component {
  render() {
    const { classes, newsList } = this.props
    const { secondaryNewsContainer } = classes

    return (
      <Grid container className={secondaryNewsContainer} justify={'center'} alignItems={'center'} spacing={16}>
        {newsList.map((newsItem, idx) =>
          <Grid item key={idx}>
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