import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

// interface Props {
// 	title: string
// }

const ProjectsListItem = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const detailsBgColor = useColorModeValue('white', 'gray.800')

	return (
		<Box m="16px auto 24px auto">
			<Box
				w="600px"
				h="300px"
				m="0 auto"
				backgroundColor="red"
				borderTopLeftRadius="6px"
				borderTopRightRadius="6px"
			/>
			<Box
				w="600px"
				m="0 auto"
				p="8px"
				bgColor={detailsBgColor}
				borderBottomLeftRadius="6px"
				borderBottomRightRadius="6px"
			>
				<Heading fontSize="1.4em" color={color}>
					title
				</Heading>

				<p>description</p>
				<p>Technologies used: (icons)</p>
				<p>View Project & Source Code primary color buttons (same width)</p>
			</Box>
		</Box>
	)
}

export { ProjectsListItem as ListItem }
