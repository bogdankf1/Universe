import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { NEWS } from '../constants/ActionTypes'
import { connect } from 'react-redux'
import CompanyNewsDefaultSelection from './CompanyNewsDefaultSelection'
import textConstants from '../constants/textConstants'
import CompanyNewsLoading from './CompanyNewsLoading';
import CompanyNewsContainer from './CompanyNewsContainer';

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


class CompanyNewsSection extends Component {
  render() {
    const { classes } = this.props
    const { CompanyNewsSection, companyNewsItemWrapper } = classes

    return (
      <Grid container className={CompanyNewsSection} justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item className={companyNewsItemWrapper}>
          <Typography variant="display1">
            {textConstants.COMPANIES_NEWS}          
          </Typography>
        </Grid>
        <Grid item className={companyNewsItemWrapper}>
          <CompanyNewsDefaultSelection />
        </Grid>
        <Grid item className={companyNewsItemWrapper}>
          <CompanyNewsLoading />
        </Grid>
        <Grid item className={companyNewsItemWrapper}>
          <CompanyNewsContainer />
        </Grid>
      </Grid>
    )
  }
}

CompanyNewsSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(CompanyNewsSection))