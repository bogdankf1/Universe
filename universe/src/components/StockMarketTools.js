import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '../../node_modules/@material-ui/core'
import textConstants from '../constants/textConstants'
import ToolCard from './ToolCard'
import { TOOLS_TYPES } from '../constants/app'

const styles = {
  toolsContainer: {
    width: '100%',
    padding: '20px'
  }
}

class StocksMarketTools extends Component {
  render() {
    const { classes } = this.props
    const { toolsContainer } = classes
    return (
      <div className="stock-market-tools-wrapper">
        <div className="stock-market-tools-header">

        </div>
        <Grid
          container
          className={toolsContainer}
          justify={'center'}
          spacing={8}
        >
          {TOOLS_TYPES.map((toolType, idx) =>
            <Grid item key={idx} >
              <ToolCard
                toolType={toolType}
                toolTitle={textConstants[toolType]}
                cardClassName={`tool-card tool-card-${toolType.toLowerCase()}`}
              />
            </Grid>
          )}
        </Grid>
      </div>
     ) 
  }
}

StocksMarketTools.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(StocksMarketTools))