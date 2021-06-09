import { Box, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaRegCalendarAlt } from 'react-icons/fa'

interface PositionProps {
	company: string
	title: string
	dates: string
	description: string[]
	id: string
}

interface Props extends PositionProps {}

const Position = (props: Props) => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="section" py="16px" data-id="experience-item">
			<Flex
				flexDir={['column', 'row']}
				justify={['center', 'space-between']}
				align="center"
				textAlign={['center', 'initial']}
				pb={['16px', '0']}
			>
				<Box>
					<Heading as="h3" fontSize="xl" color={color}>
						{props.title}
					</Heading>
					<Box fontSize="lg" fontStyle="italic">
						{props.company}
					</Box>
				</Box>

				<Flex align="center" fontSize="sm" pt={['2px', '0']}>
					<Icon as={FaRegCalendarAlt} color={color} mr="8px" />
					{props.dates}
				</Flex>
			</Flex>

			<Box as="ul" listStyleType="none" py={['0', '8px']} px={['8px', '0']}>
				{props.description.map((item: string, index: number) => {
					return (
						<Box
							as="li"
							_before={{
								content: '"• "',
								color,
								fontSize: 'xl'
							}}
							key={`${props.id}-${index}`}
						>
							{item}
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export { Position }
export type { PositionProps }
