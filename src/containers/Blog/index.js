import React from 'react'

import Head from 'next/head'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

export const Blog = props => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <section id="page-body">
        <h1>Blog</h1>
      </section>
    </main>
  )
}
