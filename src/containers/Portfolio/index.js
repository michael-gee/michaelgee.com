import Head from 'next/head'
import { Button } from '../../components/Button'

export const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Michael Gee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Portfolio</h1>

        <Button text="Test" />
      </main>

      <footer>Footer</footer>
    </>
  )
}
