import Image from 'next/image'
import { Button, Icon } from 'semantic-ui-react'
import { FcDocument } from 'react-icons/fc'

import { MG_SOCIAL_MEDIA } from '../../constants'

import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <header className={styles.profile}>
      <div className={styles.profileImg}>
        <Image src="/images/michael.jpg" alt="Michael Gee profile image" width={240} height={240} />
      </div>

      <div className={styles.titleContainer}>
        <h1>Michael Gee</h1>
        <h2>Software Developer</h2>
      </div>

      <div className={styles.linkItems}>
        {MG_SOCIAL_MEDIA.map((item, index) => {
          return (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
              key={item.text}
            >
              <Icon name={item.icon} size="large" />
              <span>{item.text}</span>
            </a>
          )
        })}
      </div>

      <a
        href="https://www.coreview.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkItem}
      >
        <Icon name="briefcase" size="large" />
        <span>CoreView</span>
      </a>
    </header>
  )
}
