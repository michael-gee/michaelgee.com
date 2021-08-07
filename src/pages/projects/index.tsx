import { ListItem, ProjectProps } from '@/components/projects/ListItem'
import { Container } from '@/components/Container'
import { Box } from '@chakra-ui/react'

import data from '@/db/projects.json'

const ProjectsPage = () => {
	const { projects } = data

	return (
		<Container>
			{projects.map((project: ProjectProps, index: number) => {
				const imagePosition = index % 2 === 0 ? 'right' : 'left'
				return <ListItem {...project} imagePosition={imagePosition} key={project.title} />
			})}

			<Box as="p" fontSize="1.2em" textAlign="center" pt={['0', '0', '32px']} pb="32px">
				<Box as="span" pr="8px">
					more projects coming soon...
				</Box>
				🚀
			</Box>
		</Container>
	)
}

export default ProjectsPage
