import PropTypes from 'prop-types'

import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import emoji from 'remark-emoji'

import styles from './BlogPost.module.css'

export const BlogPost = ({ post }) => {
  return (
    <>
      <h2 className={`page-title ${styles.postTitle}`}>{post.title}</h2>

      <div className={styles.coverImageContainer}>
        <Image src={post.coverImageSrc} width={600} height={252} />
      </div>

      <div className={styles.blogPostContainer}>
        <ReactMarkdown plugins={[[emoji, { emoticon: true }]]}>{post.body}</ReactMarkdown>
      </div>
    </>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    coverImageSrc: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.string,
    commentsCount: PropTypes.number,
    reactionsCount: PropTypes.number
  })
}
