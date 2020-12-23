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

      <div className={styles.socialIcons}>
        {MG_SOCIAL_MEDIA.map(item => {
          return (
            <Button
              icon
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.text} Profile Link`}
              className={styles.socialIcon}
              key={item.icon}
            >
              <Icon name={item.icon} size="big" />
            </Button>
          )
        })}
      </div>

      <div className={styles.employment}>
        <div className={styles.employmentItem}>
          <Icon name="briefcase" size="large" />
          <a
            href="https://www.coreview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            CoreView
          </a>
        </div>

        <div className={styles.employmentItem}>
          <Icon name="map marker alternate" size="large" />
          <span>Atlanta, GA</span>
        </div>
      </div>

      <a
        href="https://drive.google.com/file/d/1evQaxVmXenXp39aJC6jO0u4-PyhG9TkQ/view"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeBtnContainer}
      >
        <Button id={styles.resumeBtn}>
          <FcDocument />
          <span>Resume</span>
        </Button>
      </a>
    </header>
  )
}
