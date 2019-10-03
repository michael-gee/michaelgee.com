import React from 'react'
import PropTypes from 'prop-types'

import FeatureItem from './FeatureItem'

const Homepage = props => {
  const { data } = props

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }} data-testid="rs-homepage-container">
      {data.map(item => (
        <div key={item.uid} data-testid="rs-homepage-ftItem">
          <FeatureItem title={item.title} route={item.route} date={item.date} description={item.description} />
        </div>
      ))}
    </div>
  )
}

Homepage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Homepage
