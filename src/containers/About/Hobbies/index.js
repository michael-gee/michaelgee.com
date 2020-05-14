import { Icon } from 'semantic-ui-react'

import styles from './Hobbies.module.css'

export const Hobbies = () => {
  return (
    <section>
      <h2 className="page-title">Other Hobbies & Interests</h2>

      <div id={styles.hobbies}>
        <div className={styles.hobby}>
          <Icon name="golf ball" size="large" />
          <span>Golf</span>
        </div>
        <div className={styles.hobby}>
          <Icon name="basketball ball" size="large" />
          <span>Basketball</span>
        </div>
        <div className={styles.hobby}>
          <Icon name="plane" size="large" />
          <span>Travel</span>
        </div>
        <div className={styles.hobby}>
          <Icon name="beer" size="large" />
          <span>Socializing</span>
        </div>
        <div className={styles.hobby}>
          <Icon name="game" size="large" />
          <span>Video Games</span>
        </div>
        <div className={styles.hobby}>
          <Icon name="book" size="large" />
          <span>Reading</span>
        </div>
      </div>
    </section>
  )
}
