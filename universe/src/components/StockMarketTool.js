import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksMarketTool extends Component {
  render() {
    const { match : { params }, toolName } = this.props
    console.log(params)

    return (
      <Query
        query={gql`
        {
          stocks(id: "FB") {
            list
          }
        }
      `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error :(</p>

          console.log(JSON.parse(data.stocks.list))

          return (
            <div>
              <Typography>
                {toolName}
              </Typography>
              {data.stocks.list}
            </div>
          )
        }}
        {/*  */}
      </Query>
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