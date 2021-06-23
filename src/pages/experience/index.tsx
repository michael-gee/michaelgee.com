import { Position, PositionProps } from '@/components/experience/Position'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

import data from '@/db/experience.json'

const ExperiencePage = () => {
	const { experiences } = data

	return (
		<>
			<PageHead
				title="Michael Gee | Experience"
				description=""
				url="https://michaelgee.com/experience"
			/>

			<Container>
				{experiences.map((item: PositionProps) => {
					return <Position {...item} key={item.id} />
				})}
			</Container>
		</>
	)
}

export default ExperiencePage
