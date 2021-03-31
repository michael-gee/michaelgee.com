import { Experience } from '@/containers/Experience'
import { PageTitle } from '@/components/PageTitle'
import { experience, ExperienceItem } from '@/containers/Experience/experience'

const ExperiencePage = () => (
	<Experience>
		<PageTitle title="Work Experience" />

		{experience.map((item: ExperienceItem) => {
			return <Experience.Position {...item} key={item.id} />
		})}
	</Experience>
)

export default ExperiencePage
