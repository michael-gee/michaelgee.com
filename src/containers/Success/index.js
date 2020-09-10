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
          id={styles.success}
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
