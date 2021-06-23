import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { Box } from '@chakra-ui/react'

const AboutPage = () => (
	<>
		<PageHead
			title="Michael Gee | About Me"
			description="Michael Gee is a passionate software developer eager to build, learn, and share web development things along with turning ideas into applications."
			url="https://michaelgee.com/about"
		/>

		<Container>
			<Box py="16px">
				<PageTitle title="Hello, I'm Michael Gee 👋" />
				<Box as="p" pt="8px" pb="16px">
					I'm am a passionate and self-motivated software developer eager to turn ideas into
					applications. My ambitions include staying on the leading edge of web development focusing
					primarily on building elegant, responsive, and performant user interfaces & experiences
					while using serverless cloud technologies to grow my full-stack development skills. I
					always look to meet new like-minded dev friends or find new learning opportunities &
					projects to rapidly continue improving as a developer.
				</Box>
			</Box>
		</Container>
	</>
)

export default AboutPage
