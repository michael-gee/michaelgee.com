import { Container } from '@/components/Container'
import { PageTitle } from '@/components/PageTitle'
import { Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { IoConstruct } from 'react-icons/io5'

const MemesPage = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Container>
			<PageTitle text="Memes" />

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
		</Container>
	)
}

export default MemesPage
