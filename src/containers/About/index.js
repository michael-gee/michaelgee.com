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
          content="Michael Gee is a software developer eager to learn, share, and teach web development along with turning ideas into applications."
        />
      </Head>

      <div className="page-content">
        <Intro />
        <TechStack />
        <Hobbies />
      </div>
    </>
  )
}
