// import { ListItem } from '@/components/projects/ListItem'
import { Container } from '@/components/Container'
import { Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { IoConstruct } from 'react-icons/io5'
const ProjectsPage = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Container>
			<Heading
				as="h3"
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontSize="x-large"
				mt="16px"
				mb="24px"
			>
				<Icon as={IoConstruct} color={color} mr="12px" />
				Under Construction
				<Icon as={IoConstruct} color={color} ml="12px" />
			</Heading>
			{/* 
			<ListItem />
			<ListItem /> */}
		</Container>
	)
}

export default ProjectsPage
