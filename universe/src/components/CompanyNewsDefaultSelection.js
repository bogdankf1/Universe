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
  }
})


class CompanyNewsDefaultSelection extends Component {
  render() {
    const { classes } = this.props
    const { container } = classes

    return (
      <Grid container className={container} justify={'center'} alignItems={'center'} spacing={8}>
        {DEFAULT_LOADED_STOCKS.map((item, idx) =>
          <Grid item key={idx}>
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