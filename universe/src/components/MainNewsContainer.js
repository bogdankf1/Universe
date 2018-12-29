import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const styles = theme => ({
  mainNewsContainer: {
    maxWidth: 750,
    background: theme.palette.secondary.main,
    borderRadius: 30,
    margin: '0 auto'
  },
  mainNewsImage: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    width: 300,
    height: 250,
    cursor: 'pointer'
  },
  dateLineContainer: {

  },
  headlineContainer: {
    textAlign: 'justify'
  },
  summaryContainer: {
    textAlign: 'justify',
    cursor: 'pointer',
    "&:hover": {
      textDecoration: 'underline'
    }
  },
  newsTextSection: {
    maxWidth: 400
  }
})


class MainNewsContainer extends Component {
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
    const {
      mainNewsContainer,
      mainNewsImage,
      dateLineContainer,
      headlineContainer,
      summaryContainer,
      newsTextSection
    } = classes

    return (
      <Grid container className={mainNewsContainer} justify={'center'} alignItems={'center'} spacing={8}>
        <Grid item>
          <div className={`${mainNewsImage} main-news-image`} onClick={this.goToNews} /*style={{backgroundImage: `url('${newsItem.image}')`}}*/ />
        </Grid>
        <Grid item className={newsTextSection}>
          <Grid container justify={'center'} direction={'column'} spacing={8}>
            <Grid item className={dateLineContainer}>
              <Grid container justify={'space-between'} alignItems={'center'}>
                <Grid item>
                  <Typography variant="subheading">
                    {newsItem.source}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subheading">
                    {this.getNewsDate()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={headlineContainer}>
              <Typography variant="headline" component="h2">
                {newsItem.headline}
              </Typography>
            </Grid>
            <Grid item className={summaryContainer} onClick={this.goToNews}>
              <Typography variant="body2">
                {newsItem.summary}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

MainNewsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(MainNewsContainer))