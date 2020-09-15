import Head from 'next/head'
import { Nav } from '../../components/Nav'
import { Profile } from '../../components/Profile'
import { PageContent } from '../../components/PageContent'

import { Intro } from './Intro'
import { TechStack } from './TechStack'
import { Hobbies } from './Hobbies'

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

          <PageContent>
            <Intro />

            <TechStack />

            <Hobbies />
          </PageContent>
        </div>
      </main>
    </>
  )
}
