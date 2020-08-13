import Link from 'next/link'
import { Button, Image, Icon } from 'semantic-ui-react'

import { MG_SOCIAL_MEDIA } from '../../constants'

import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <div id={styles.profile}>
      <Image
        src="/images/michael.jpg"
        alt="Michael Gee profile image"
        circular
        size="medium"
        id={styles.profileImg}
      />

      <div id={styles.titleContainer}>
        <h1>Michael Gee</h1>
        <h2>Software Developer</h2>
      </div>

      <div id={styles.socialIcons}>
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

      <div id={styles.employment}>
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

      <Link href="/mentorship">
        <Button id={styles.mentorshipBtn}>
          <Icon name="university" />
          <span>Mentorship</span>
        </Button>
      </Link>
    </div>
  )
}
