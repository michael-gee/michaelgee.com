import React from 'react'

import Button from '@material-ui/core/Button'

import { triggerNavigationChange } from '../../utils/navigationUtils'

import constants from '../../constants'

const Homepage = props => {
  return (
    <div data-test="rs-homepage">
      <h1>Homepage</h1>

      <Button onClick={() => triggerNavigationChange(constants.navigation.routePaths.counter)}>
        Navigate to Counter
      </Button>
    </div>
  )
}

export default Homepage
