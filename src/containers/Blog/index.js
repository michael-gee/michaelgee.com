import Head from 'next/head'
import PropTypes from 'prop-types'
import { Nav } from '../../components/Nav'
import { PostItem } from './PostItem'

import { motion } from 'framer-motion'
import styles from './Blog.module.css'

export const Blog = props => {
  return (
    <>
      <Head>
        <title>Blog | Michael Gee</title>
        <meta
          name="description"
          content="Michael Gee's personal blog sharing past experiences and cool things he has learned."
        />
      </Head>

      <main id="page" style={{ alignItems: 'flex-start' }}>
        <Nav />

        <motion.div
          id={styles.container}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4
              }
            }
          }}
          exit={{ opacity: 0 }}
        >
          <div id={styles.title} className="page-title">
            <span>Blog Posts</span>
            <a href="https://dev.to/michaelgee" target="_blank" rel="noopener noreferrer">
              <img
                src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                alt="Michael Gee's DEV Profile"
                height="30"
                width="30"
              />
            </a>
          </div>

          <div id={styles.postsContainer}>
            {props.data.map(item => {
              return (
                <PostItem
                  title={item.title}
                  description={item.description}
                  date={item.published_at}
                  image={item.cover_image}
                  url={item.url}
                  counters={{
                    views: item.page_views_count,
                    reactions: item.public_reactions_count,
                    comments: item.comments_count
                  }}
                  key={item.id}
                />
              )
            })}
          </div>
        </motion.div>
      </main>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      body_markdown: PropTypes.string,
      canonical_url: PropTypes.string,
      comments_count: PropTypes.number,
      cover_image: PropTypes.string,
      description: PropTypes.string,
      flare_tag: PropTypes.shape({
        name: PropTypes.string,
        bg_color_hex: PropTypes.string,
        text_color_hex: PropTypes.string
      }),
      id: PropTypes.number,
      page_views_count: PropTypes.number,
      path: PropTypes.string,
      positive_reactions_count: PropTypes.number,
      public_reactions_count: PropTypes.number,
      published: PropTypes.bool,
      published_at: PropTypes.string,
      published_timestamp: PropTypes.string,
      slug: PropTypes.string,
      tag_list: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      type_of: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.shape({
        github_username: PropTypes.string,
        name: PropTypes.string,
        profile_image: PropTypes.string,
        profile_image_90: PropTypes.string,
        twitter_username: PropTypes.string,
        username: PropTypes.string,
        website_url: PropTypes.string
      })
    })
  ).isRequired
}
