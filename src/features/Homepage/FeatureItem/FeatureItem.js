import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { CodeOutlined, ExpandMore, ExpandLess } from '@material-ui/icons'

import reactSVG from './react.svg'

import { useStyles } from './styles'

const FeatureItem = props => {
  const classes = useStyles()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={classes.cardContainer}>
      <CardHeader
        avatar={
          <Avatar aria-label="feature">
            <CodeOutlined />
          </Avatar>
        }
        title="React Feature"
        subheader="September 14, 2016"
      />

      <img src={reactSVG} alt="React JS Logo" />

      <CardActions>
        <IconButton
          color="inherit"
          onClick={_handleExpandClick}
          aria-expanded={isExpanded}
          title={`${isExpanded ? 'Close' : 'Open'} the feature item description`}
        >
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </CardActions>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p>hello world</p>
        </CardContent>
      </Collapse>
    </Card>
  )

  function _handleExpandClick() {
    setIsExpanded(!isExpanded)
  }
}

export default FeatureItem
