import Head from 'next/head'
import { Button, Icon, Divider, Statistic } from 'semantic-ui-react'
import { Nav } from '../../components/Nav'

import { benefits, howItWorks } from './content'

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
            {benefits.map(item => {
              return (
                <div className={styles.benefit} key={item.title}>
                  <Icon name={item.icon} size="big" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section>
          <h2 className={styles.subTitle}>How It Works</h2>

          <ul id={styles.howItWorks}>
            <li>
              <h3>Introduction / Consultation</h3>
              <p>{howItWorks.intro} </p>
              <Button id={styles.introductionBtn}>Introduce Yourself</Button>
            </li>
            <Divider horizontal style={{ maxWidth: 400, margin: '0px auto', color: '#78cc6d' }}>
              Or
            </Divider>
            <li>
              <h3>Schedule Session</h3>
              <p>{howItWorks.schedule} </p>
              <Icon name="arrow down" size="large" />
            </li>
            <li>
              <h3>Quick Initial Payment</h3>
              <p>{howItWorks.payment} </p>
              <Icon name="arrow down" size="large" />
            </li>
            <li>
              <h3>LEARN</h3>
              <p>{howItWorks.learn}</p>
              <Icon name="arrow down" size="large" />
            </li>
            <li>
              <h3>Stay In Touch</h3>
              <p>{howItWorks.stayInTouch} </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className={styles.subTitle}>Target Audience</h2>

          <p>Bulleted list (primary green bullets)</p>
        </section>

        <section>
          <h2 className={styles.subTitle}>Pricing</h2>

          <div id={styles.pricing}>
            <Statistic horizontal>
              <Statistic.Value>$20</Statistic.Value>
              <Statistic.Label>per 30 minutes</Statistic.Label>
            </Statistic>
          </div>
        </section>

        <section>
          <h2 className={styles.subTitle}>FAQ</h2>

          <ul>
            <li>what languages do I speak</li>
            <li>Requirements or Recommendations (having discord, etc)</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
