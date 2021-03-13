import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { Intro } from './Intro'
import { TechStack } from './TechStack'

interface Props {
	children?: React.ReactNode
}

export const About = (props: Props) => (
	<>
		<PageHead
			title="Michael Gee"
			description="Michael Gee is a full-stack software developer eager to learn & share web development along with turning ideas into applications."
			url="https://michaelgee.com"
		/>

		<Container>{props.children}</Container>
	</>
)

About.Intro = Intro
About.TechStack = TechStack
