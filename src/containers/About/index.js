import React from 'react'

import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

export const About = props => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <section id="page-body">
        <h1>About</h1>
      </section>
    </main>
  )
}
