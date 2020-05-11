import React from 'react'

import { Button, Image, Icon } from 'semantic-ui-react'

import styles from './Profile.module.css'

export const Profile = props => {
  return (
    <div id={styles.profile}>
      <Image src="/images/michael.jpg" circular size="medium" id={styles.profileImg} />

      <h1>Michael Gee</h1>
      <h3>Software Developer</h3>

      <div id={styles.socialIcons}>
        <Button
          icon
          as="a"
          href="https://www.github.com/michaelgee22"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <Icon name="github" size="big" />
        </Button>

        <Button
          icon
          as="a"
          href="https://www.linkedin.com/in/michael-gee/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <Icon name="linkedin" size="big" />
        </Button>

        <Button
          icon
          as="a"
          href="https://www.twitter.com/michaelgee7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <Icon name="twitter" size="big" />
        </Button>
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

      <Button id={styles.mentorshipBtn}>
        <Icon name="users" />
        <span>Mentorship</span>
      </Button>
    </div>
  )
}
4
