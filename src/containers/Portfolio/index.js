import Head from 'next/head'
import { Header } from './Header'

import styles from './Portfolio.module.css'

export const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Michael Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id={styles.container}>
        <h1>test</h1>
      </main>
    </>
  )
}
