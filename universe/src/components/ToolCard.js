import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'
import { push } from 'react-router-redux'
import { TOOLS } from '../constants/ActionTypes'
import { ROUTES } from '../constants/routes'

const styles = theme => ({
  toolCard: {
    width: 200,
    height: 260,
    background: theme.palette.secondary.main,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.dark
  },
  media: {
    height: 0,
    paddingTop: 150,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  },
  toolCardTitle: {
    color: theme.palette.secondary.light
  }
})

class ToolCard extends Component {
  handleToolSelect = () => {
    const { toolType, dispatch } = this.props
    dispatch({
      type: TOOLS.SET_TOOL_NAME,
      payload: toolType
    })
    dispatch(push(`${ROUTES.TOOLS.BASE_PATH}/tool/${toolType.toLowerCase()}`))
  }
  render() {
    const { classes, toolTitle, toolDescription, cardClassName } = this.props
    const { toolCard, media, toolCardTitle } = classes

    return (
      <Card className={toolCard}>
        <div className={`${media} ${cardClassName}`} title={toolTitle} />
        <CardContent>
          <Typography gutterBottom component="h4" className={toolCardTitle}>
            {toolTitle}
          </Typography>
          <Typography component="p">
            {toolDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" onClick={this.handleToolSelect}>
            {textConstants.CONTINUE}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

ToolCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(connect(
  state => ({
    
  })
)(ToolCard))