import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { DEFAULT_LOADED_STOCKS } from '../constants/app'
import CompanyNewsSelectionCard from './CompanyNewsSelectionCard'

const styles = theme => ({
  container: {
    padding: '10px 0'
  },
  companyNewsSelectionCard: {
    padding: 5
  }
})


class CompanyNewsDefaultSelection extends Component {
  render() {
    const { classes } = this.props
    const { container, companyNewsSelectionCard } = classes

    return (
      <Grid container className={container} justify={'center'} alignItems={'center'}>
        {DEFAULT_LOADED_STOCKS.map((item, idx) =>
          <Grid item key={idx} className={companyNewsSelectionCard}>
            <CompanyNewsSelectionCard selectedCompanySymbol={item} />
          </Grid>
        )}
      </Grid>
    )
  }
}

CompanyNewsDefaultSelection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(CompanyNewsDefaultSelection))