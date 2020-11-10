import Head from 'next/head'
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
          content="Michael Gee is a full-stack software developer eager to learn, share, and teach web development along with turning ideas into applications."
        />
        <meta property="og:title" content="Michael Gee" />
        <meta
          property="og:description"
          content="Michael Gee is a full-stack software developer eager to learn, share, and teach web development along with turning ideas into applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.michaelgee.com" />
      </Head>

      <div className="page-content">
        <Intro />
        <TechStack />
        <Hobbies />
      </div>
    </>
  )
}
