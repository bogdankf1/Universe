import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TOOLS } from '../constants/ActionTypes'
import { STOCKS_RANGES } from '../constants/app'
import { Chip, Grid } from '@material-ui/core'

const styles = theme => ({
	rangesContainer: {
		margin: '10px 0',
		[theme.breakpoints.down("xs")]: {
			margin: '0 0 5px'
		}
	},
  chip: {
		margin: 5,
		[theme.breakpoints.down("xs")]: {
			height: 20,
			margin: 2
		}
  }
})

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
				{STOCKS_RANGES.reverse().map((range, idx) =>
					<Grid item key={idx}>
						<Chip
							label={range}
							className={chip}
							variant="outlined"
							onClick={() => this.saveCurrentRange(range)}
						/>
					</Grid>
				)}
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