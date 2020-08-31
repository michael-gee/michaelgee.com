import PropTypes from 'prop-types'

import { Image } from 'semantic-ui-react'

import styles from './PostItem.module.css'

export const PostItem = props => {
  return (
    <div className={styles.itemContainer}>
      <Image src={props.image} size="medium" />

      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{props.title}</h3>

        <div className={styles.itemMeta}>
          <span className={styles.itemDate}>{props.date}</span>
        </div>

        <p>{props.description}</p>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  counters: PropTypes.shape({
    views: PropTypes.number,
    reactions: PropTypes.number,
    comments: PropTypes.number
  }).isRequired
}
