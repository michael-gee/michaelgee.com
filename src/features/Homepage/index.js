import React from 'react'

import FeatureItem from './FeatureItem'

import data from './static'

import './Homepage.css'

const Homepage = () => {
  return (
    <div id="rs-homepage-container">
      {data.map(item => (
        <div key={item.uid} data-testid="rs-homepage-ftItem">
          <FeatureItem title={item.title} command={item.command} date={item.date} description={item.description} />
        </div>
      ))}
    </div>
  )
}

export default Homepage
