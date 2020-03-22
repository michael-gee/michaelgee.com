import React from 'react'

import Header from './Header'

import './ReactPlayground.css'

// Instead of putting commented notes within code and practice projects --> show the notes in the UI and make the UI examples functional with the notes along with it on the screen

const ReactPlayground = props => {
  return (
    <main>
      <Header />

      <div id="mg-reactPlayground-body">
        <h1>Routes rendered here</h1>
        <h4>/react-playground/:route</h4>
      </div>
    </main>
  )
}

export default ReactPlayground
