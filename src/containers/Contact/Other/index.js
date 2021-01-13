import { Icon } from 'semantic-ui-react'
import styles from './Other.module.css'

export const OtherContactMethods = () => {
  return (
    <section>
      <h2 className={styles.otherTitle}>other ways to contact...</h2>

      <div className={styles.otherContact}>
        <div>
          <Icon name="mail" size="large" />
          <span>michaelgee.dev@protonmail.com</span>
        </div>

        <div>
          <Icon name="discord" size="large" />
          <span>michaelg33#9503</span>
        </div>
      </div>
    </section>
  )
}
