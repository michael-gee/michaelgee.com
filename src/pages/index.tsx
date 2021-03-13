import { About } from '@/containers/About'
import { PageTitle } from '@/components/PageTitle'

const AboutPage = () => (
	<About>
		<h1 style={{ display: 'none' }}>Michael Gee</h1>

		<PageTitle title="Hello World 🌎" />
		<About.Intro />

		<PageTitle title="Tech Stack" />
		<About.TechStack />
	</About>
)

export default AboutPage
