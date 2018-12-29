import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import CompanyNewsDefaultSelection from './CompanyNewsDefaultSelection'
import textConstants from '../constants/textConstants'
import CompanyNewsLoading from './CompanyNewsLoading'
import CompanyNewsContainer from './CompanyNewsContainer'
import AutoCompleteInput from './AutoCompleteInput'
import SymbolsLoading from './SymbolsLoading'

const styles = theme => ({
  companyNewsSection: {
    maxWidth: 750,
    background: theme.palette.secondary.main,
    borderRadius: 30,
    margin: '0 auto',
    marginTop: 20,
    paddingBottom: 10
  },
  autoCompleteWrapper: {
    maxWidth: 600,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  }
})


class CompanyNewsSection extends Component {
  render() {
    const { classes } = this.props
    const { companyNewsSection, autoCompleteWrapper } = classes

    return (
      <Grid container className={companyNewsSection} justify={'center'} alignItems={'center'} direction={'column'}>
        <Grid item>
          <Typography variant="display1">
            {textConstants.COMPANIES_NEWS}          
          </Typography>
        </Grid>
        <Grid item>
          <SymbolsLoading />
        </Grid>
        <Grid item className={autoCompleteWrapper}>
          <AutoCompleteInput newsLoading={true} />
        </Grid>
        <Grid item>
          <CompanyNewsDefaultSelection />
        </Grid>
        <Grid item>
          <CompanyNewsLoading />
        </Grid>
        <Grid item>
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