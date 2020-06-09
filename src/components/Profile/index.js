import Link from 'next/link'
import { Button, Image, Icon } from 'semantic-ui-react'

import { useMediaQuery } from 'react-responsive'

import styles from './Profile.module.css'

export const Profile = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)'
  })

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

      {isDesktopOrLaptop && (
        <>
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
        </>
      )}
    </div>
  )
}
4
