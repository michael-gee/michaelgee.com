import { Box, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaDiscord, FaGolfBall } from 'react-icons/fa'
import { IoConstruct } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

export const CurrentInterests = () => {
	return (
		<>
			<CurrentInterestItem
				title="Inxeption"
				description="test"
				icon={BsBriefcaseFill}
				iconColor={useColorModeValue('#86432D', '#D6B47C')}
				iconBgColor={useColorModeValue('#FEEBC8', '#3B3734')}
			/>

			<CurrentInterestItem
				title="lunch.dev Community"
				description="test"
				icon={FaDiscord}
				iconColor={useColorModeValue('#645494', '#D6BCFA')}
				iconBgColor={useColorModeValue('#E9D8FD', '#353245')}
			/>

			<CurrentInterestItem
				title="Side Projects (coming soon...)"
				description="test"
				icon={IoConstruct}
				iconColor={useColorModeValue('#365071', '#7CAFD1')}
				iconBgColor={useColorModeValue('#BEE3F8', '#2A3644')}
			/>

			<CurrentInterestItem
				title="Golf"
				description="test"
				icon={FaGolfBall}
				iconColor={useColorModeValue('#30614A', '#9AE6B4')}
				iconBgColor={useColorModeValue('#C6F7D5', '#2B3A3A')}
			/>
		</>
	)
}

interface CurrentInterestItemProps {
	title: string
	description: string
	icon: IconType
	iconColor: string
	iconBgColor: string
}

export const CurrentInterestItem = (props: CurrentInterestItemProps) => {
	const borderColor = useColorModeValue('gray.100', 'gray.700')
	const backgroundColor = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			borderRadius="8px"
			borderWidth="2px"
			borderColor={borderColor}
			bgColor={backgroundColor}
			transition=".3s"
			cursor="pointer"
			p="16px"
			m="16px 4px"
			_hover={{ transform: 'translateY(-4px)' }}
		>
			<Flex
				align="center"
				justify="center"
				bgColor={props.iconBgColor}
				p="12px"
				mr="16px"
				borderRadius="8px"
			>
				<Icon as={props.icon} color={props.iconColor} fontSize="x-large" />
			</Flex>

			<Box>
				<Heading as="h3" fontSize="lg">
					{props.title}
				</Heading>
				<Box as="p">{props.description}</Box>
			</Box>
		</Flex>
	)
}
