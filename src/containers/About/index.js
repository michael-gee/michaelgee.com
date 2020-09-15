import Head from 'next/head'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'
import { Intro } from './Intro'
import { TechStack } from './TechStack'
import { Hobbies } from './Hobbies'

import { motion } from 'framer-motion'

export const About = () => {
  return (
    <>
      <Head>
        <title>Michael Gee</title>
        <meta
          name="description"
          content="Michael Gee is a software developer eager to learn, share, and teach web development along with turning ideas into applications."
        />
      </Head>

      <main id="page">
        <Nav />

        <div className="page-body">
          <Profile />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.6 }}
            exit={{ opacity: 0, transition: 0 }}
            className="page-content"
          >
            <Intro />

            <TechStack />

            <Hobbies />
          </motion.div>
        </div>
      </main>
    </>
  )
}
