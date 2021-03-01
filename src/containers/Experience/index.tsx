import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

interface Props {
	children?: React.ReactNode
}

export const Experience = (props: Props) => {
	return (
		<>
			<PageHead
				title="Michael Gee | Experience"
				description=""
				url="https://www.michaelgee.com/experience"
			/>

			<Container>{props.children}</Container>
		</>
	)
}
