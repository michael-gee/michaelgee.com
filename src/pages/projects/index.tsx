import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { IoConstructSharp } from 'react-icons/io5'

const ProjectsPage = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Container>
			<PageTitle title="Projects" />

			<Heading
				as="h3"
				display="flex"
				alignItems="center"
				justifyContent="center"
				mt="16px"
				mb="24px"
			>
				<Icon as={IoConstructSharp} color={color} mr="12px" />
				Under Construction
				<Icon as={IoConstructSharp} color={color} ml="12px" />
			</Heading>
		</Container>
	)
}

export default ProjectsPage
