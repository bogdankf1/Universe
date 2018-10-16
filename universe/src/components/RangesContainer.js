import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TOOLS } from '../constants/ActionTypes'
import { STOCKS_RANGES } from '../constants/app'
import { Chip, Grid } from '@material-ui/core'

const styles = {
	rangesContainer: {
		margin: '10px 0px'
	},
  chip: {
    margin: 5
  }
}

class RangesContainer extends Component {
	saveCurrentRange = (range) => {
		const { dispatch } = this.props

		dispatch({
			type: TOOLS.SAVE_CURRENT_RANGE,
			payload: range
		})
	}
  render() {
		const { classes } = this.props
		const { chip, rangesContainer } = classes

    return (
			<Grid container justify={'center'} alignItems={'center'} className={rangesContainer}>
				<Grid item>
					{STOCKS_RANGES.map((range, idx) =>
						<Chip
							label={range}
							className={chip}
							variant="outlined"
							onClick={() => this.saveCurrentRange(range)}
							key={idx}
						/>
					)}
      	</Grid>
			</Grid>
     ) 
  }
}

RangesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({

  })
)(RangesContainer))