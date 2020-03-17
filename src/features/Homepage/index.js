import React from 'react'

import FeatureItem from './FeatureItem'

import data from './static'

import './Homepage.css'

const Homepage = () => {
  return (
    <div id="rs-homepage-container">
      {data.map(item => (
        <div className="rs-homepage-ftItem" key={item.uid}>
          <FeatureItem title={item.title} route={item.route} date={item.date} description={item.description} />
        </div>
      ))}
    </div>
  )
}

export default Homepage
