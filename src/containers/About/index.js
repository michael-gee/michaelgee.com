import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'
import { Intro } from './Intro'
import { TechStack } from './TechStack'
import { Hobbies } from './Hobbies'

export const About = () => {
  return (
    <main id="page">
      <Nav />
      <Profile />

      <div className="page-body">
        <Intro />

        <TechStack />

        <Hobbies />
      </div>
    </main>
  )
}
