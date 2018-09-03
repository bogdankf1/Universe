import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import textConstants from '../constants/textConstants'

const styles = {
  toolCard: {
    width: '200px',
    height: '250px'
  },
  media: {
    height: 0,
    paddingTop: '150px'
  },
}

class ToolCard extends Component {
  handleToolSelect = () => {
    const { toolType } = this.props
    console.log(toolType)
  }
  render() {
    const { classes, toolTitle, toolDescription, toolPicture, cardClassName } = this.props
    const { toolCard, media } = classes
    return (
      <Card
        className={toolCard}
        onClick={this.handleToolSelect}
      >
        <CardMedia
          className={`${media} ${cardClassName}`}
          image={toolPicture}
          title={toolTitle}
        />
        <CardContent>
          <Typography gutterBottom component="h4">
            {toolTitle}
          </Typography>
          <Typography component="p">
            {toolDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
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

export default withStyles(styles)(ToolCard)