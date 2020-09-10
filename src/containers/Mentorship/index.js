import Head from 'next/head'
import Link from 'next/link'
import { Accordion, Button, Icon, Divider, Statistic } from 'semantic-ui-react'
import { Nav } from '../../components/Nav'

import { useState } from 'react'

import { benefits, howItWorks, faq, pricing } from './content'

import { motion } from 'framer-motion'
import styles from './Mentorship.module.css'

export const Mentorship = () => {
  const [activeAccodion, setActiveAccordion] = useState(-1)

  return (
    <>
      <Head>
        <title>Mentorship | Michael Gee</title>
        <meta
          name="description"
          content="Rapidly grow as a developer and reach your end goals through mentorship with Michael Gee."
        />
      </Head>

      <main id="page">
        <Nav />

        <motion.div
          id={styles.container}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
          exit={{ opacity: 0 }}
        >
          <Icon name="rocket" size="massive" id={styles.rocketIcon} />
          <h1 id={styles.title}>Accelerate your software development journey</h1>

          <h2 id={styles.mainSubTitle}>
            Interested in getting started in software development? Tired of getting stuck or want to
            rapidly speed up your growth and reach your end goals? Let's get started today!
          </h2>

          <section>
            <h2 className={styles.subTitle} style={{ paddingTop: 24 }}>
              Benefits
            </h2>

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
                <Link href="/contact">
                  <Button id={styles.introductionBtn}>
                    <Icon name="handshake" />
                    Introduce Yourself
                  </Button>
                </Link>
              </li>
              <Divider horizontal style={{ maxWidth: 400, margin: '0px auto', color: '#004e92' }}>
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
            <h2 className={styles.subTitle}>Who Is This Mentorship For?</h2>

            <div id={styles.targetAudience}>
              <ul className={styles.targetList}>
                <li>Beginners interested in starting a career in software development</li>
                <li>
                  Developers currently learning but have no job or team development experience
                </li>
                <li>
                  Developers who are tired of endless courses and documentation looking for new
                  resources and ideas
                </li>
              </ul>

              <ul className={styles.targetList}>
                <li>Junior developers with ~2 years of experience or less</li>
                <li>
                  React devs looking to sharpen their skills with best practices and professional
                  advice
                </li>
                <li>
                  Front-end devs looking to expand their knowledge in the vast web development
                  ecosystem
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={styles.subTitle}>Pricing</h2>

            <div id={styles.pricing}>
              <h4>Free Tier</h4>
              <p>{pricing.free}</p>

              <hr size="20" />

              <h4>
                Premium Tier <Icon name="star" id={styles.premiumStar} />
              </h4>
              <p>{pricing.premium}</p>
              <Statistic
                horizontal
                style={{ display: 'flex', justifyContent: 'center', margin: 0 }}
              >
                <Statistic.Value>$20</Statistic.Value>
                <Statistic.Label>per 30 minutes</Statistic.Label>
              </Statistic>
            </div>
          </section>

          <div id={styles.getStarted}>
            <h3>Have any additional questions? Introduce yourself and let's get started!</h3>

            <Link href="/contact">
              <Button id={styles.getStartedBtn}>Get Started</Button>
            </Link>
          </div>

          <section>
            <h2 className={styles.subTitle}>FAQ</h2>

            <Accordion id={styles.faq} styled>
              {faq.map((item, index) => {
                return (
                  <div key={index}>
                    <Accordion.Title
                      active={activeAccodion === index}
                      index={index}
                      onClick={() => _onAccordionClick(index)}
                    >
                      <Icon name="dropdown" />
                      {item.question}
                    </Accordion.Title>

                    <Accordion.Content active={activeAccodion === index}>
                      {item.answer}
                    </Accordion.Content>
                  </div>
                )
              })}
            </Accordion>
          </section>
        </motion.div>
      </main>
    </>
  )

  function _onAccordionClick(newIndex) {
    if (newIndex === activeAccodion) setActiveAccordion(-1)
    else setActiveAccordion(newIndex)
  }
}
