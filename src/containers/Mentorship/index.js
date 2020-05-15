import Head from 'next/head'
import { Icon } from 'semantic-ui-react'
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

          <p>Icons with text (6)</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>How It Works</h2>

          <p>Numbered list or stepper explaining process</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>Target Audience</h2>

          <p>Bulleted list (primary green bullets)</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>Pricing</h2>

          <p>3 column pricing model</p>
        </section>
      </div>
    </main>
  )
}
