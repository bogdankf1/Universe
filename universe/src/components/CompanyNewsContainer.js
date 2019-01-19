import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import NewsItem from './NewsItem'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'

const styles = theme => ({
  companySymbolHeadline: {
    marginLeft: 50,
    marginBottom: 25
  },
  companyNewsItem: {
    padding: 5
  }
})


class CompanyNewsContainer extends Component {
  render() {
    const { classes, companyNewsList, selectedCompanySymbol = DEFAULT_LOADED_STOCKS[0] } = this.props
    const { companySymbolHeadline, companyNewsItem } = classes

    return (
      <Grid container justify={'center'} direction={'column'}>
        <Grid item>
          <Typography variant="display1" className={companySymbolHeadline}>
            {selectedCompanySymbol}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify={'center'} alignItems={'center'}>
            {companyNewsList.map((newsItem, idx) =>
              <Grid item key={idx} className={companyNewsItem}>
                <NewsItem newsItem={newsItem} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

CompanyNewsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    companyNewsList: state.news.companyNewsList,
    selectedCompanySymbol: state.news.selectedCompanySymbol
  })
)(CompanyNewsContainer))