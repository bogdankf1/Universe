import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import { TOOLS } from '../constants/ActionTypes'

const styles = theme => ({
  cardPaper: {
    minWidth: 160,
    minHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    background: theme.palette.primary.light,
    userSelect: 'none',
    [theme.breakpoints.down("xs")]: {
      minWidth: 70,
      minHeight: 28,
    }
  },
  companyCardText: {
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      fontSize: '0.7rem'
    }
  }
})

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
    const { cardPaper, companyCardText } = classes

    return (
      <div onClick={this.selectCompany}>
        <Paper elevation={1} className={cardPaper}>
          <Typography variant="subheading" component="h3" className={companyCardText}>
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