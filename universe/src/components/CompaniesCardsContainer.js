import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CompanyCard from './CompanyCard'
import { Grid } from '@material-ui/core'

const styles = {

}

class CompaniesCardsContainer extends Component {
  render() {
    const { companiesList } = this.props

    return (
      <Grid container justify={'center'} alignItems={'center'} spacing={16}>
        {companiesList.map((company, idx) =>
          <Grid item key={idx}>
            <CompanyCard company={company} />
          </Grid>
        )}
      </Grid>
     ) 
  }
}

CompaniesCardsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    companiesList: state.tools.defaultStocks || []
  })
)(CompaniesCardsContainer))