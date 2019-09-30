import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { ArrowForward, CodeOutlined, ExpandMore, ExpandLess } from '@material-ui/icons'

import reactSVG from './react.svg'

import { useStyles } from './styles'

const FeatureItem = props => {
  const { title } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const classes = useStyles()

  return (
    <Card className={classes.cardContainer} style={!isExpanded ? { maxHeight: 220 } : {}}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: '#62DAFB' }} aria-label="feature">
            <CodeOutlined />
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />

      <img src={reactSVG} alt="React JS Logo" className={classes.cardImage} />

      <CardActions className={classes.cardActions}>
        <IconButton
          color="inherit"
          onClick={_handleExpandClick}
          aria-expanded={isExpanded}
          title={`${isExpanded ? 'Close' : 'Open'} item description`}
        >
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>

        <IconButton color="inherit" onClick={_handleItemClick} title={`Navigate to ${title}`}>
          <ArrowForward />
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

  function _handleItemClick() {
    console.log('item clicked')
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default FeatureItem
