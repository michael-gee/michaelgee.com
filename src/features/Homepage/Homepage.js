import React from 'react'

import FeatureItem from './FeatureItem'

import useNavigation from '../../hooks/useNavigation'
import constants from '../../constants'

import { useStyles } from './styles'

const Homepage = props => {
  const classes = useStyles()
  const { navigateTo } = useNavigation()

  return (
    <div className={classes.homepageContainer} data-testid="rs-homepage-container">
      <FeatureItem title="React Feature 1" />
      <FeatureItem title="React Feature 2" />
      <FeatureItem title="React Feature 3" />

      <FeatureItem title="React Feature 4" />
      <FeatureItem title="React Feature 5" />
      <FeatureItem title="React Feature 6" />

      {/* <h1>Homepage</h1>

      <Button
        onClick={() => navigateTo(constants.navigation.routePaths.counter)}
        data-testid="rs-homepage-counter-navBtn"
      >
        Navigate to Counter
      </Button>
      <Button
        onClick={() => navigateTo(constants.navigation.routePaths.dataTable)}
        data-testid="rs-homepage-dataTable-navBtn"
      >
        Navigate to Data Table
      </Button> */}

      {/* <Button
        onClick={() => navigateTo(constants.navigation.routePaths.treeList)}
        data-testid="rs-homepage-treeList-navBtn"
      >
        Navigate to Tree List
      </Button> */}
    </div>
  )
}

export default Homepage
