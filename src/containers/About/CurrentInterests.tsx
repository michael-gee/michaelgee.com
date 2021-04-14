import { Box, Flex, Heading, Icon, Link, useColorModeValue } from '@chakra-ui/react'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaDiscord, FaGolfBall } from 'react-icons/fa'
import { IoConstruct } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

export const CurrentInterests = () => {
	return (
		<>
			<CurrentInterestItem
				title="Inxeption"
				description="Developing amazing new B2B ecommerce features & interfaces"
				href="https://www.inxeption.com/"
				icon={BsBriefcaseFill}
				iconColor={useColorModeValue('#86432D', '#D6B47C')}
				iconBgColor={useColorModeValue('#FEEBC8', '#3B3734')}
			/>

			<CurrentInterestItem
				title="lunch.dev Community"
				description="Moderating my all-time favorite web development community"
				href="https://events.lunch.dev/"
				icon={FaDiscord}
				iconColor={useColorModeValue('#645494', '#D6BCFA')}
				iconBgColor={useColorModeValue('#E9D8FD', '#353245')}
			/>

			<CurrentInterestItem
				title="Side Project(s) (coming soon...)"
				description="Building out new exciting projects that I'm passionate about"
				href="https://michaelgee.dev/"
				icon={IoConstruct}
				iconColor={useColorModeValue('#365071', '#7CAFD1')}
				iconBgColor={useColorModeValue('#BEE3F8', '#2A3644')}
			/>

			<CurrentInterestItem
				title="Golf"
				description="Playing my favorite pastime outside of coding"
				href="https://www.youtube.com/watch?v=U3Oe3ofuukI&ab_channel=JeffRitter"
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
	href: string
	icon: IconType
	iconColor: string
	iconBgColor: string
}

export const CurrentInterestItem = (props: CurrentInterestItemProps) => {
	const borderColor = useColorModeValue('gray.100', 'gray.700')
	const backgroundColor = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			as={Link}
			href={props.href}
			isExternal
			align="center"
			borderRadius="8px"
			borderWidth="2px"
			borderColor={borderColor}
			bgColor={backgroundColor}
			transition=".3s"
			cursor="pointer"
			p="16px"
			pr="0"
			m="16px 4px"
			_hover={{ transform: 'translateY(-4px)', textDecoration: 'none' }}
		>
			<Flex
				align="center"
				justify="center"
				bgColor={props.iconBgColor}
				w="48px"
				h="48px"
				mr="16px"
				borderRadius="8px"
			>
				<Icon as={props.icon} color={props.iconColor} fontSize="x-large" />
			</Flex>

			<Flex flexDir="column" justify="center" w="calc(100% - 104px)">
				<Heading as="h3" fontSize="lg" pb="4px">
					{props.title}
				</Heading>
				<Box as="p" lineHeight="1.1">
					{props.description}
				</Box>
			</Flex>
		</Flex>
	)
}
