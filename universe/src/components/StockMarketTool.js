import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Query } from 'react-apollo'
import { loadStocksList } from '../graphql/queries/stocks'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksMarketTool extends Component {
  render() {
    const { match : { params }, toolName } = this.props
    
    return (
      <div>
        <Typography>
          {toolName || params.tool}
        </Typography>
        <Query query={loadStocksList} variables={{ id: 'MSFT' }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            console.log(JSON.parse(data.stocks.list))

            return data.stocks.list
          }}
        </Query>
      </div>
     ) 
  }
}

StocksMarketTool.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    toolName: state.stockMarketTools.toolName
  })
)(StocksMarketTool))