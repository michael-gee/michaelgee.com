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

import useNavigation from '../../../hooks/useNavigation'

import reactSVG from './react.svg'

import { useStyles } from './styles'

const FeatureItem = props => {
  const { title, route, date, description } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const { navigateTo } = useNavigation()
  const classes = useStyles()

  return (
    <Card
      className={classes.cardContainer}
      data-testid="rs-featureItem-container"
      style={!isExpanded ? { maxHeight: 220 } : {}}
    >
      <CardHeader
        avatar={
          <Avatar className={classes.cardAvatar} aria-label="feature">
            <CodeOutlined />
          </Avatar>
        }
        title={title}
        subheader={date}
      />

      <img src={reactSVG} alt="React JS Logo" className={classes.cardImage} />

      <CardActions className={classes.cardActions}>
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

      <Collapse in={isExpanded} timeout="auto" unmountOnExit data-testid="rs-featureItem-collapse">
        <CardContent>
          <p className={classes.cardDesc}>{description}</p>
        </CardContent>
      </Collapse>
    </Card>
  )

  function _handleExpandClick() {
    setIsExpanded(!isExpanded)
  }

  function _handleItemClick() {
    navigateTo(route)
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureItem
