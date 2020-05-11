import React from 'react'

import Head from 'next/head'
import { Sidebar } from '../../components/Sidebar'
import { Nav } from '../../components/Nav'

export const Blog = props => {
  return (
    <main id="page">
      <Nav />

      <div id="page-sidebar">
        <Sidebar />
      </div>

      <section id="page-body">
        <h1>Blog</h1>
      </section>
    </main>
  )
}
