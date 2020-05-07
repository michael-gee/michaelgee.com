import React from 'react'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import styles from './About.module.css'

export const About = props => {
  return (
    <main id={styles.about}>
      <div id={styles.sidebar}>
        <Sidebar />
      </div>

      <div id={styles.body}>
        <Header />

        <div>
          <h1>About</h1>
        </div>
      </div>
    </main>
  )
}
