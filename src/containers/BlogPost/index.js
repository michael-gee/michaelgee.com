import PropTypes from 'prop-types'

import Image from 'next/image'
import { Icon } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import emoji from 'remark-emoji'

import styles from './BlogPost.module.css'

export const BlogPost = ({ post }) => {
  return (
    <div className={styles.blogPost}>
      <header>
        <h2 className={`page-title ${styles.postTitle}`}>{post.title}</h2>

        <div className={styles.coverImageContainer}>
          <Image src={post.coverImageSrc} width={584} height={245} />
        </div>

        <div className={styles.datePublished}>{new Date(post.date).toDateString()}</div>
      </header>

      <div className={styles.markdownContainer}>
        <ReactMarkdown plugins={[[emoji, { emoticon: true }]]}>{post.body}</ReactMarkdown>
      </div>

      <footer className={styles.footer}>
        <div className={styles.contribute}>
          <Icon name="info circle" />
          This article was originally published on{' '}
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            DEV
          </a>
          . To leave a like or participate in the comments, please visit the original link to
          provide some much appreciated feedback!
        </div>

        <div className={styles.counters}>
          <span>
            <Icon name="heart" />
            {post.reactionsCount}
          </span>

          <span>
            <Icon name="comment" />
            {post.commentsCount}
          </span>
        </div>
      </footer>
    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    coverImageSrc: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    slug: PropTypes.string,
    commentsCount: PropTypes.number,
    reactionsCount: PropTypes.number
  })
}
