import { Icon } from 'semantic-ui-react'
import { SiTypescript, SiCsharp, SiDotNet, SiMongodb, SiMicrosoftazure } from 'react-icons/si'

import styles from './TechStack.module.css'

export const TechStack = () => {
  return (
    <>
      <section>
        <h2 className="page-title">Tech Stack</h2>
        <div className={styles.techStack}>
          <article>
            <h3>Front-End</h3>

            <div className={styles.tech}>
              <Icon name="html5" size="huge" style={{ color: '#F0652A' }} />
              <Icon name="css3" size="huge" style={{ color: '#1C88C7' }} />
              <SiTypescript style={{ fontSize: '3.75em', margin: '0 24px', color: '#3074BF' }} />
              <Icon name="js" size="huge" style={{ color: '#F1D91C', fontSize: '4.35em' }} />
              <Icon name="react" size="huge" style={{ color: '#00D8FF' }} />
            </div>
          </article>

          <article>
            <h3>Back-End</h3>

            <div className={styles.tech}>
              <Icon name="node js" size="huge" style={{ color: '#82C106' }} />
              <SiTypescript style={{ fontSize: '3.75em', color: '#3074BF', margin: '0 24px' }} />
              <SiCsharp style={{ fontSize: '3.75em', color: '#642176', margin: '0 24px' }} />
              <SiDotNet style={{ fontSize: '3.75em', margin: '0 24px 0 16px' }} />
              <SiMongodb style={{ fontSize: '3.75em', color: '#3E9738' }} />
            </div>
          </article>

          <article>
            <h3>Cloud</h3>

            <div className={styles.tech}>
              <Icon name="aws" size="huge" style={{ color: '#F19227' }} />
              <SiMicrosoftazure
                style={{ fontSize: '3.75em', color: '#2171B2', margin: '0 24px' }}
              />
            </div>
          </article>
        </div>
      </section>

      <section>
        <h3 className={styles.otherTitle}>Other Skills</h3>
        <div className={styles.otherTech}>
          <div className={styles.otherTechItem}>UX</div>
          <div className={styles.otherTechItem}>Next.js</div>
          <div className={styles.otherTechItem}>Git</div>
          <div className={styles.otherTechItem}>REST</div>
          <div className={styles.otherTechItem}>RabbitMQ</div>
          <div className={styles.otherTechItem}>TDD</div>
        </div>
      </section>
    </>
  )
}
