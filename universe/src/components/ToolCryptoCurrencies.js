import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import { loadCryptoCurrenciesData } from '../graphql/queries/stocks'
import { TOOLS } from '../constants/ActionTypes'

const styles = {
	cryptoCurrenciesContainer: {

	}
}

class ToolCryptoCurrencies extends Component {
	handleLoadedData = (data) => {
		const { dispatch } = this.props

		dispatch({
			type: TOOLS.SAVE_CRYPTOCURRENCIES_DATA,
			payload: data
		})
	}
  render() {
    const { classes } = this.props
    const { cryptoCurrenciesContainer } = classes

    return (
      <div className={cryptoCurrenciesContainer}>
				<Query query={loadCryptoCurrenciesData}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading cryptocurrencies data...</p>
						if (error) return <p>Error :(</p>
						
						this.handleLoadedData(data.cryptoCurrencies.list)

						return 'Cryptocurrencies data loaded successfully!'
					}}
				</Query>
      </div>
     ) 
  }
}

ToolCryptoCurrencies.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({

  })
)(ToolCryptoCurrencies))