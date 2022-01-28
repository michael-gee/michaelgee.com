import { Position, PositionProps } from '@/components/timeline/Position'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

import data from '@/db/timeline.json'

const TimelinePage = () => {
	const { timeline } = data

	return (
		<>
			<PageHead
				title="Michael Gee | Timeline"
				description=""
				url="https://michaelgee.com/timeline"
			/>

			<Container>
				{timeline.map((item: PositionProps) => {
					return <Position {...item} key={item.id} />
				})}
			</Container>
		</>
	)
}

export default TimelinePage
