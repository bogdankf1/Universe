import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { NEWS } from '../constants/ActionTypes'
import { connect } from 'react-redux'
import CompanyNewsDefaultSelection from './CompanyNewsDefaultSelection'
import textConstants from '../constants/textConstants'
import NewsItem from './NewsItem';

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


class CompanyNewsContainer extends Component {
  render() {
    const { classes, companyNewsList, selectedCompanySymbol } = this.props
    const { CompanyNewsSection, companyNewsItemWrapper } = classes

    return (
      <Grid container justify={'center'} direction={'column'}>
        <Grid item>
          <Typography variant="headline">
            {selectedCompanySymbol}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify={'center'} alignItems={'center'} spacing={16}>
            {companyNewsList.map((newsItem, idx) =>
              <Grid item key={idx}>
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
    companySymbol: state.news.companySymbol
  })
)(CompanyNewsContainer))