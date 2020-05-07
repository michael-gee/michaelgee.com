import Head from 'next/head'

import styles from './Portfolio.module.css'

export const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Michael Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id={styles.container}>
        <h1>Portfolio</h1>
      </main>
    </>
  )
}
