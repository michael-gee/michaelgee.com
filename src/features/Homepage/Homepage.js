import React from 'react'

import FeatureItem from './FeatureItem'

import dataArr from './static'

import { useStyles } from './styles'

const Homepage = props => {
  const classes = useStyles()

  return (
    <div className={classes.homepageContainer} data-testid="rs-homepage-container">
      {dataArr.map(item => (
        <FeatureItem
          title={item.title}
          route={item.route}
          date={item.date}
          description={item.description}
          key={item.uid}
        />
      ))}
    </div>
  )
}

export default Homepage
