import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const styles = theme => ({
  newsItemWrapper: {
    maxWidth: 150,
    maxHeight: 200,
    overflowY: 'auto'
  },
  newsItemHeadline: {
    height: 65,
    overflowY: 'hidden',
    "&:hover": {
      textDecoration: 'underline'
    },
    cursor: 'pointer'
  }
})


class NewsItem extends Component {
  getNewsDate = () => {
    const { newsItem } = this.props
    const date = new Date(newsItem.datetime)
    return date.toLocaleDateString('us')
  }
  goToNews = () => {
    const { newsItem } = this.props
    window.open(newsItem.url, "_blank")
  }
  render() {
    const { classes, newsItem } = this.props
    const { newsItemWrapper, newsItemHeadline } = classes

    return (
      <Grid container justify={'center'} direction={'column'} className={newsItemWrapper}>
        <Grid item>
          <Typography variant="caption">
            {newsItem.source}
          </Typography>
        </Grid>
        <Grid item className={newsItemHeadline} onClick={this.goToNews}>
          <Typography variant="body1" component="h2">
            {newsItem.headline}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            {this.getNewsDate()}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(NewsItem))