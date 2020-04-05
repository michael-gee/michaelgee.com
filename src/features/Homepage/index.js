import React from 'react'

import PortfolioItem from './PortfolioItem'

import data from './static'

import './Homepage.css'

const Homepage = () => {
  return (
    <main>
      <h1 id="mg-homepage-title">MG SANDBOX</h1>

      <div id="mg-homepage-container">
        {data.map(item => (
          <div className="mg-homepage-portfolioItem" key={item.title}>
            <PortfolioItem title={item.title} route={item.route} date={item.date} description={item.description} />
          </div>
        ))}
      </div>

      <h4 id="mg-homepage-temporary">
        Homepage is currently a placeholder and the default route will be Portfolio when it is refactored and
        implemented into this project. This component will either no longer exist or need to be repurposed.
      </h4>
    </main>
  )
}

export default Homepage
