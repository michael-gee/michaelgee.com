import React from 'react'
import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'

import { useStyles } from './styles'

const Loading = props => {
  const classes = useStyles()

  return (
    <div className={classes.loadingContainer} data-test="rs-loading-container">
      <LinearProgress />

      <div className={classes.loadingMessageContainer}>Loading...</div>
    </div>
  )
}

Loading.propTypes = {
  containerHeight: PropTypes.string,
  containerWidth: PropTypes.string
}

export default Loading
