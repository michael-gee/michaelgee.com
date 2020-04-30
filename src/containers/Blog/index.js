import Head from 'next/head'

import styles from './Blog.module.css'

export const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Michael Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.container}>
        <h1>Blog</h1>
      </main>

      <footer>Footer</footer>
    </>
  )
}
