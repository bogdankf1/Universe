import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import { TOOLS } from '../constants/ActionTypes'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  },
  cardPaper: {
    minWidth: 150,
    minHeight: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
}

class CompanyCard extends Component {
  selectCompany = () => {
    const { dispatch, company } = this.props

    dispatch({
      type: TOOLS.CLEAR_SELECTED_COMPANY_STOCKS_LIST
    })

    dispatch({
      type: TOOLS.SAVE_SELECTED_COMPANY_NAME,
      payload: company
    })
  }
  render() {
    const { company = {}, classes } = this.props
    const { cardPaper } = classes

    return (
      <div onClick={this.selectCompany}>
        <Paper elevation={1} className={cardPaper}>
          <Typography variant="h5" component="h3">
            {company.companyName}
          </Typography>
        </Paper>
      </div>
    )
  }
}

CompanyCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
  })
)(CompanyCard))