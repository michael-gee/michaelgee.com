import Head from 'next/head'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'
import { Intro } from './Intro'
import { TechStack } from './TechStack'
import { Hobbies } from './Hobbies'

import { useMediaQuery } from 'react-responsive'

export const About = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 960px)'
  })

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
        <Profile />

        <div className="page-body">
          <Intro />

          <TechStack />

          <Hobbies />
        </div>
      </main>
    </>
  )
}
