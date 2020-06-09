import { Icon } from 'semantic-ui-react'

import styles from './TechStack.module.css'

export const TechStack = () => {
  return (
    <>
      <section>
        <h2 className="page-title">Tech Stack</h2>
        <div id={styles.techStack}>
          <article>
            <h3>Front-End</h3>

            <div className={styles.tech}>
              <Icon name="html5" size="huge" style={{ color: '#F0652A' }} />
              <Icon name="css3" size="huge" style={{ color: '#1C88C7' }} />
              <Icon name="js" size="huge" style={{ color: '#F1D91C', fontSize: '4.35em' }} />
              <Icon name="react" size="huge" style={{ color: '#00D8FF' }} />
            </div>
          </article>
          <article>
            <h3>Back-End</h3>

            <div className={styles.tech}>
              <Icon name="node" size="huge" style={{ color: '#82C106', marginRight: 36 }} />
              <img src="/icons/csharp.png" alt="" />
            </div>
          </article>
          <article>
            <h3>Cloud</h3>

            <div className={styles.tech}>
              <Icon name="amazon" size="huge" style={{ color: '#F19227' }} />
              <Icon name="microsoft" size="huge" style={{ color: '#00A9E9' }} />
            </div>
          </article>
        </div>
      </section>

      <section>
        <h3 id={styles.otherTitle}>Other Skills</h3>
        <div id={styles.otherTech}>
          <div className={styles.otherTechItem}>MongoDB</div>
          <div className={styles.otherTechItem}>.NET Core</div>
          <div className={styles.otherTechItem}>Git</div>
          <div className={styles.otherTechItem}>REST</div>
          <div className={styles.otherTechItem}>TDD</div>
          <div className={styles.otherTechItem}>OOP</div>
        </div>

        <div id={styles.iconLink}>
          <a
            target="_blank"
            href="https://icons8.com/icons/set/c-sharp-logo"
            rel="noopener noreferrer"
          >
            C Sharp Logo Icon
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">
            Icons8
          </a>
        </div>
      </section>
    </>
  )
}
