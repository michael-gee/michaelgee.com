import { ListItem, ProjectProps } from '@/components/projects/ListItem'
import { Container } from '@/components/Container'
import { Box } from '@chakra-ui/react'

import data from '@/db/projects.json'

const ProjectsPage = () => {
	const { projects } = data

	return (
		<Container>
			{projects.map((project: ProjectProps) => (
				<ListItem {...project} />
			))}

			<Box as="p" fontSize="1.1em" textAlign="center" mb="32px">
				<Box as="span" pr="8px">
					more projects coming soon...
				</Box>
				🚀
			</Box>
		</Container>
	)
}

export default ProjectsPage
