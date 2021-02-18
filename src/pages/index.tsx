import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'

const Index = () => (
	<Container height="100vh">
		<Hero />
		<DarkModeSwitch />
		<CTA />
	</Container>
)

export default Index
