import Head from 'next/head'
import { Button, Icon, Popup } from 'semantic-ui-react'
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
          <section>
            <h2 className="page-title">Current Projects</h2>

            <div className={styles.projectContainer}>
              {/* CoreView */}
              <div id={styles.coreView} className={styles.project}>
                <img src="/images/projects/coreview.png" alt="CoreView company logo" />
                <div className={styles.overlay}>
                  <p>Actively developing CoreFlow, the workflow automation engine for CoreView.</p>

                  <div className={styles.overlayIcons}>
                    <Button
                      icon="linkify"
                      size="massive"
                      as="a"
                      href="https://www.coreview.com/coreflow/"
                      target="_blank"
                      rel="noopener noreferrer"
                    />

                    <Popup
                      trigger={<Icon name="info circle" size="big" />}
                      position="bottom center"
                      basic
                    />
                  </div>
                </div>
              </div>

              {/* michaelgee.com */}
              <div id={styles.mgCom} className={styles.project}>
                <img src="/images/projects/michaelgeelogo.png" alt="michaelgee.com website logo" />
                <h4>michaelgee.com</h4>

                <div className={styles.overlay}>
                  <p>
                    Continuously maintaining and improving this site as well as generating new ideas
                    and content.
                  </p>

                  <div className={styles.overlayIcons}>
                    <Popup
                      trigger={<Icon name="info circle" size="big" />}
                      position="bottom center"
                      basic
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="page-title">Past Projects</h2>

            <div className={styles.projectContainer}>
              {/* CEGMAG Solutions */}
              <div id={styles.cegmag} className={styles.project}>
                <img src="/images/projects/cegmag.png" alt="CEGMAG Solutions Inc. company logo" />
                <div className={styles.overlay}></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
