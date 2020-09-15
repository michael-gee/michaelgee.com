import Head from 'next/head'
import Link from 'next/link'
import { Button, Icon } from 'semantic-ui-react'

import { motion } from 'framer-motion'
import styles from './Success.module.css'

export const Success = () => {
  return (
    <>
      <Head>
        <title>Michael Gee</title>
      </Head>

      <main id="page">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeIn', duration: 0.6 }}
          exit={{ opacity: 0, transition: 0 }}
          id={styles.success}
        >
          <h1 id={styles.title}>Thank You!</h1>

          <p className={styles.info}>Your submission was sent successfully.</p>
          <p className={styles.info}>
            For messages and inquiries, look for me to get back to you within 24 hours.
          </p>

          <Link href="/">
            <Button as="a" id={styles.navBtn}>
              <Icon name="home" />
              <span>Navigate to Homepage</span>
            </Button>
          </Link>
        </motion.div>
      </main>
    </>
  )
}
