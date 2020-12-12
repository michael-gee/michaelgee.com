import Head from 'next/head'
// import ReactMarkdown from 'react-markdown'
// import emoji from 'emoji-dictionary'

import styles from './BlogPost.module.css'

export const BlogPost = props => {
  // const title = props.data.title
  // const post =
  //   props.data && props.data['body_markdown']
  //     ? props.data['body_markdown']
  //     : 'Blog post was not found.'
  // const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

  return (
    <>
      <h1>Blog Post</h1>
      {/* <Head>
        <title>Michael Gee</title>
      </Head>

      <h2 className="page-title">{title}</h2>

      <div className={styles.blogPostContainer}>
        <ReactMarkdown renderers={{ text: emojiSupport }}>{post}</ReactMarkdown>
      </div> */}
    </>
  )
}
