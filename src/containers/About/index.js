import { PageHead } from '../../components/PageHead'
import { Intro } from './Intro'
import { TechStack } from './TechStack'
import { Hobbies } from './Hobbies'

export const About = props => {
  return (
    <>
      <PageHead
        title="Michael Gee"
        description="Michael Gee is a full-stack software developer eager to learn, share, and teach web development along with turning ideas into applications."
        type="website"
        url="https://www.michaelgee.com"
      />

      <div className="page-content">{props.children}</div>
    </>
  )
}

About.Intro = Intro
About.TechStack = TechStack
About.Hobbies = Hobbies
