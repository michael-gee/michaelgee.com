import React from 'react'

import Button from '@material-ui/core/Button'

import useNavigation from '../../hooks/useNavigation'
import constants from '../../constants'

const Homepage = props => {
  const { navigateTo } = useNavigation()

  return (
    <div data-test="rs-homepage">
      <h1>Homepage</h1>

      <Button id="nav-btn" onClick={() => navigateTo(constants.navigation.routePaths.counter)}>
        Navigate to Counter
      </Button>
      <Button onClick={() => navigateTo(constants.navigation.routePaths.dataTable)}>Navigate to Data Table</Button>
    </div>
  )
}

export default Homepage
