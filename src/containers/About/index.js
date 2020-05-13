import React from 'react'

import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'
import { Intro } from './Intro'
import { TechStack } from './TechStack'

export const About = () => {
  return (
    <main id="page">
      <Nav />
      <Profile />

      <div className="page-body" style={{ overflowY: 'auto' }}>
        <Intro />
        <TechStack />
      </div>
    </main>
  )
}
