import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

interface Props {
	children?: React.ReactNode
}

export const About = (props: Props) => (
	<>
		<PageHead
			title="Michael Gee | About Me"
			description="Michael Gee is a full-stack software developer eager to build, learn, and share web development things along with turning ideas into applications."
			url="https://michaelgee.com/about"
		/>

		<Container>{props.children}</Container>
	</>
)
