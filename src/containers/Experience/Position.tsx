import { Box, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ExperienceItem } from './experience'

interface Props extends ExperienceItem {}

export const Position = (props: Props) => (
	<Box as="section" py="16px" data-id="experience-item">
		<Flex
			flexDir={['column', 'row']}
			justify={['center', 'space-between']}
			align="center"
			textAlign={['center', 'initial']}
			pb={['16px', '0']}
		>
			<Box>
				<Heading as="h3" fontSize="xl" color={useColorModeValue('primary.light', 'primary.dark')}>
					{props.company}
				</Heading>
				<Box fontSize="lg">{props.title}</Box>
			</Box>

			<Flex align="center" fontSize="sm">
				<Icon
					as={FaRegCalendarAlt}
					color={useColorModeValue('primary.light', 'primary.dark')}
					mr="8px"
				/>
				{props.dates}
			</Flex>
		</Flex>

		<Box as="ul" listStyleType="none">
			{props.description.map((item: string, index: number) => {
				return (
					<Box
						as="li"
						_before={{
							content: '"• "',
							color: useColorModeValue('primary.light', 'primary.dark'),
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
