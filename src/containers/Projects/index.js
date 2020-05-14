import Head from 'next/head'
import { Nav } from '../../components/Nav'
import { Profile } from '../../components/Profile'

import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <>
      <main id="page">
        <Nav />

        <Profile />

        <div className="page-body">
          <h1>Projects</h1>
        </div>
      </main>
    </>
  )
}
