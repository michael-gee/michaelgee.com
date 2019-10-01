import React from 'react'

import FeatureItem from './FeatureItem'

import data from './static'

const Homepage = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }} data-testid="rs-homepage-container">
      {data.map(item => (
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
