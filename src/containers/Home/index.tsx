import { HomeIntro } from './Intro'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

interface Props {
	children?: React.ReactNode
}

export const Home = (props: Props) => (
	<>
		<PageHead title="Michael Gee" description="" url="https://michaelgee.com" />
		<Container>{props.children}</Container>
	</>
)

Home.Intro = HomeIntro
