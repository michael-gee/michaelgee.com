import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import styles from './Footer.module.css'

export const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contribute}>
        <Icon name="info circle" />
        This article was originally published on{' '}
        <a href="https://dev.to/michaelgee" target="_blank" rel="noopener noreferrer">
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="Michael Gee's DEV Profile"
            className={styles.devLogo}
          />
        </a>
        . To leave a like or participate in the comments, please visit the{' '}
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          original post
        </a>{' '}
        to provide some much appreciated feedback!
      </div>

      <div className={styles.counters}>
        <span>
          <Icon name="heart" />
          {props.reactionsCount}
        </span>

        <span>
          <Icon name="comment" />
          {props.commentsCount}
        </span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  url: PropTypes.string.isRequired,
  reactionsCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired
}
