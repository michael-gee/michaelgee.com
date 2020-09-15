import PropTypes from 'prop-types'

import { Image, Icon } from 'semantic-ui-react'

import styles from './PostItem.module.css'

export const PostItem = props => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className={styles.itemContainer}>
      <Image src={props.image} size="medium" />

      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{props.title}</h3>

        <div className={styles.itemMeta}>
          <span className={styles.itemDate}>{_formatDate()}</span>

          <div className={styles.itemIcons}>
            <span>
              <Icon name="eye" />
              {props.counters.views}
            </span>
            <span>
              <Icon name="heart" />
              {props.counters.reactions}
            </span>
            <span>
              <Icon name="chat" />
              {props.counters.comments}
            </span>
          </div>
        </div>

        <p>{props.description}</p>
      </div>
    </a>
  )

  function _formatDate() {
    const date = new Date(props.date)
    return date.toDateString()
  }
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
