import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import textConstants from '../constants/textConstants'
import ToolCard from './ToolCard'
import { TOOLS_TYPES } from '../constants/app'
import AppHeader from './AppHeader';

const styles = {
  toolsWrapper: {
    height: '100%',
    minHeight: '100vh'
  },
  toolsContainer: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    padding: '20px',
    position: 'relative'
  }
}

class ToolsBox extends Component {
  render() {
    const { classes } = this.props
    const { toolsWrapper, toolsContainer } = classes
    return (
      <div className={`${toolsWrapper} stocks-page`}>
        <AppHeader />
        <div className="stock-market-tools-header"></div>
        <Grid container className={toolsContainer} justify={'center'} alignItems={'center'} spacing={8}>
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

ToolsBox.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(ToolsBox))