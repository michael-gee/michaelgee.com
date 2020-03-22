import React from 'react'

import PortfolioItem from './PortfolioItem'

import data from './static'

import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <h4 style={{ paddingTop: 24 }}>
        Improve homepage styles with more modern and UI focused header and portfolio items (cards or maybe a full width
        item layout?)
      </h4>

      <div id="mg-homepage-container">
        {data.map(item => (
          <div className="mg-homepage-portfolioItem" key={item.route}>
            <PortfolioItem title={item.title} route={item.route} date={item.date} description={item.description} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Homepage
