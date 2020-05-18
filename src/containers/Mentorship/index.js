import Head from 'next/head'
import { Icon, Divider } from 'semantic-ui-react'
import { Nav } from '../../components/Nav'

import styles from './Mentorship.module.css'

export const Mentorship = () => {
  return (
    <main id="page">
      <Nav />

      <div id={styles.container}>
        <Icon name="rocket" size="massive" id={styles.rocketIcon} />
        <h1 id={styles.title}>Accelerate your software development journey</h1>

        <h2 id={styles.mainSubTitle}>
          Interested in getting started in software development? Tired of getting stuck or want to
          rapidly speed up your growth and reach your end goals? Let's get started today!
        </h2>

        <section>
          <h2 className={styles.subTitle}>Benefits</h2>

          <div id={styles.benefits}>
            <div className={styles.benefit}>
              <Icon name="chart line" size="big" />
              <h3>Growth</h3>
              <p>fill with content</p>
            </div>
            <div className={styles.benefit}>
              <Icon name="comments" size="big" />
              <h3>Collaboration</h3>
              <p>fill with content</p>
            </div>
            <div className={styles.benefit}>
              <Icon name="star" size="big" />
              <h3>Best Practices</h3>
              <p>test</p>
            </div>
            <div className={styles.benefit}>
              <Icon name="list" size="big" />
              <h3>Resources</h3>
              <p>fill with content</p>
            </div>
            <div className={styles.benefit}>
              <Icon name="lightbulb" size="big" />
              <h3>Ideas</h3>
              <p>fill with content</p>
            </div>
            <div className={styles.benefit}>
              <Icon name="code" size="big" />
              <h3>Projects</h3>
              <p>fill with content</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.subTitle}>How It Works</h2>

          <ul id={styles.howItWorks}>
            <li>
              <h3>Introduction / Consultation</h3>
            </li>
            <Divider horizontal>Or</Divider>
            <li>
              <h3>Schedule A Session</h3>
              <Icon name="arrow down" size="large" />
            </li>
            <li>
              <h3>Quick Initial Payment</h3>
              <Icon name="arrow down" size="large" />
            </li>
            <li>
              <h3>Learn!</h3>
            </li>
          </ul>
        </section>

        <section>
          <h2 className={styles.subTitle}>Target Audience</h2>

          <p>Bulleted list (primary green bullets)</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>Pricing</h2>

          <p>3 column pricing model</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>FAQ</h2>

          <ul>
            <li>what languages do I speak</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
