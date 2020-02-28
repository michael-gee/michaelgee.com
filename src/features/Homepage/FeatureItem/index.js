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

import useAppCommand from 'hooks/useAppCommand'

import reactSVG from './react.svg'

import { useStyles } from './styles'

const FeatureItem = props => {
  const { title, command, commandOpts, date, description } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const appCommand = useAppCommand(command)
  const classes = useStyles()

  // CSS from Homepage.css
  return (
    <Card className={classes.cardContainer} style={!isExpanded ? { maxHeight: 220 } : {}}>
      <CardHeader
        avatar={
          <Avatar className={classes.cardAvatar} aria-label="feature">
            <CodeOutlined />
          </Avatar>
        }
        title={title}
        subheader={date}
      />

      <img src={reactSVG} alt="React JS Logo" className="rs-featureItem-image" />

      <CardActions className="rs-featureItem-actions">
        <IconButton
          color="inherit"
          onClick={_handleExpandClick}
          aria-expanded={isExpanded}
          title={`${isExpanded ? 'Close' : 'Open'} item description`}
          data-testid="rs-featureItem-expandIconBtn"
        >
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>

        <IconButton
          color="inherit"
          onClick={_handleItemClick}
          title={`Navigate to ${title}`}
          data-testid="rs-featureItem-navIconBtn"
        >
          <ArrowForward />
        </IconButton>
      </CardActions>

      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p className="rs-featureItem-description">{description}</p>
        </CardContent>
      </Collapse>
    </Card>
  )

  function _handleExpandClick() {
    setIsExpanded(!isExpanded)
  }

  function _handleItemClick() {
    appCommand.execute({ commandOpts })
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  command: PropTypes.string.isRequired,
  commandOpts: PropTypes.object,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureItem
