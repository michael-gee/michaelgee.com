import React from 'react'

import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

export const Contact = props => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <section id="page-body">
        <h1>Contact</h1>
      </section>
    </main>
  )
}
