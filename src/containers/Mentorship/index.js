import Head from 'next/head'
import Link from 'next/link'
import { Accordion, Button, Icon } from 'semantic-ui-react'

import { useState } from 'react'

import { benefits, faq, pricing } from './content'

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

      <div id={styles.container} className="page-content">
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
          <h2 className={styles.subTitle}>Who Is This For?</h2>

          <div id={styles.targetAudience}>
            <ul className={styles.targetList}>
              <li>Beginners interested in starting a career in software development</li>
              <li>Developers currently learning but have no job or team development experience</li>
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
            <h4>
              <Icon name="star" id={styles.premiumStar} />
              Free
            </h4>
            <p>{pricing.free}</p>
          </div>
        </section>

        <div id={styles.getStarted}>
          <h3>Have any questions? Introduce yourself and let's get connect!</h3>

          <Link href="/contact">
            <Button id={styles.getStartedBtn}>Contact</Button>
          </Link>
        </div>

        <section>
          <h2 className={styles.subTitle} style={{ paddingTop: 8 }}>
            FAQ
          </h2>

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
      </div>
    </>
  )

  function _onAccordionClick(newIndex) {
    if (newIndex === activeAccodion) setActiveAccordion(-1)
    else setActiveAccordion(newIndex)
  }
}
