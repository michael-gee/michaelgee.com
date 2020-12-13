import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './Header.module.css'

export const Header = props => {
  return (
    <header>
      <h2 className={`page-title ${styles.postTitle}`}>{props.title}</h2>

      <div className={styles.coverImageContainer}>
        <Image src={props.coverImageSrc} width={584} height={245} />
      </div>

      <div className={styles.datePublished}>{new Date(props.date).toDateString()}</div>
    </header>
  )
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  coverImageSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
