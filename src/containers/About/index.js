import React from 'react'

import { Icon } from 'semantic-ui-react'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

import styles from './About.module.css'

export const About = props => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <div className="page-body">
        <section>
          <h2 className={styles.title}>About Me</h2>
          <p id={styles.intro}>
            <strong>Hello! I'm Michael Gee.</strong> I am a passionate, energetic, and
            self-motivated full-stack software developer eager to turn ideas into applications. My
            ambitions are to stay on the leading edge of the web development industry which include
            utilizing serverless technologies, building elegant user interfaces/experiences, and
            eventually incorporating artificial intelligence in the software I build. I always look
            to find new learning opportunities or projects to rapidly keep improving as a developer.
          </p>

          <div id={styles.services}>
            <div className={styles.service}>
              <Icon name="code" size="huge" />
              <h2>Developer</h2>
              <p>Text</p>
            </div>
            <div className={styles.service}>
              <Icon name="university" size="huge" />
              <h2>Mentor</h2>
              <p>Text</p>
            </div>
            <div className={styles.service}>
              <Icon name="write" size="huge" />
              <h2>Blogger</h2>
              <p>Text</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.title}>Professional Skills</h2>
        </section>
      </div>
    </main>
  )
}
