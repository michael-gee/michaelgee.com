import { About } from '@/containers/About'
import { PageTitle } from '@/components/PageTitle'

const AboutPage = () => (
	<About>
		<h1 style={{ display: 'none' }}>Michael Gee</h1>

		<PageTitle title="Hello World 🌎" />
		<About.Intro />

		<PageTitle title="Tech Stack" />
		<About.TechStack />
		{/* 
		<PageTitle title="What I'm Doing" />
		<h2>(Briefcase icon) Inxeption</h2>
		<h2>
			(Discord icon) Actively Involved in the React Podcast, Devs Helping Devs, & other discord
			communities
		</h2>
		<h2>
			(GitPullRequest icon) Open Source contributions to the lunch.dev calendar & building out side
			projects like michaelgee.dev
		</h2> */}
	</About>
)

export default AboutPage
