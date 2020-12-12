import Image from 'next/image'
import Link from 'next/link'

import PropTypes from 'prop-types'

import styles from './ListItem.module.css'

export const ListItem = props => {
  return (
    <Link href={props.href}>
      <a className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <Image src={props.image} width={400} height={168} />
        </div>

        <div className={styles.itemContent}>
          <h3 className={styles.itemTitle}>{props.title}</h3>
          <p className={styles.itemDesc}>{props.description}</p>
          <div className={styles.itemDate}>{_formatDate()}</div>
        </div>
      </a>
    </Link>
  )

  function _formatDate() {
    const date = new Date(props.date)
    return date.toDateString()
  }
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}
