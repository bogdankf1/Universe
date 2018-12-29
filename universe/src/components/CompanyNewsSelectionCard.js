import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import { NEWS } from '../constants/ActionTypes'
import { connect } from 'react-redux'

const styles = theme => ({
  paperContainer: {
    background: theme.palette.secondary.lightBackground,
    width: 80,
    height: 40,
    cursor: 'pointer'
  },
  paperInner: {
    height: '100%'
  }
})


class CompanyNewsSelectionCard extends Component {
  selectCompanySymbol = () => {
    const { dispatch, selectedCompanySymbol } = this.props
    
    dispatch({
      type: NEWS.CLEAR_COMPANY_NEWS_LIST
    })
    
    dispatch({
      type: NEWS.SAVE_COMPANY_SYMBOL,
      payload: selectedCompanySymbol
    })
  }
  render() {
    const { classes, selectedCompanySymbol } = this.props
    const { paperContainer, paperInner } = classes

    return (
      <Paper className={paperContainer} elevation={1} onClick={this.selectCompanySymbol}>
        <Grid container justify={'center'} alignItems={'center'} className={paperInner}>
          <Grid item>
            <Typography variant="subheading" component="h3">
              {selectedCompanySymbol}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

CompanyNewsSelectionCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    marketNewsList: state.news.marketNewsList
  })
)(CompanyNewsSelectionCard))