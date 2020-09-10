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
            className="page-content"
            initial="hidden"
            animate="visible"
            // variants={{
            //   hidden: {
            //     scale: 0.8,
            //     opacity: 0
            //   },
            //   visible: {
            //     scale: 1,
            //     opacity: 1,
            //     transition: {
            //       delay: 0.4
            //     }
            //   }
            // }}
            exit={{ opacity: 0 }}
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
