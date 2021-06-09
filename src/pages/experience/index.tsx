import { Position, PositionProps } from '@/components/experience/Position'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

import { experience } from '@/constants/experience'

const ExperiencePage = () => (
	<>
		<PageHead
			title="Michael Gee | Experience"
			description=""
			url="https://michaelgee.com/experience"
		/>

		<Container>
			{experience.map((item: PositionProps) => {
				return <Position {...item} key={item.id} />
			})}
		</Container>
	</>
)

export default ExperiencePage
