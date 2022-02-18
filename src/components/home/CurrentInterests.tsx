import { Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

import { HiLightBulb } from 'react-icons/hi'
import { ImQuill } from 'react-icons/im'

import type { IconType } from 'react-icons/lib'

const CurrentInterests = () => {
	return (
		<>
			<CurrentInterestItem
				title="GoFan"
				description="(Primary Focus) Leading UI/UX/DX initiatives for both admin and customer facing apps"
			/>

			<CurrentInterestItem
				title="Side Project(s)"
				description="Brainstorming innovative ideas for continuous learning and striving to provide value (coming soon)"
				icon={HiLightBulb}
				iconColor={useColorModeValue('#FFD804', 'yellow.200')}
				iconBgColor={useColorModeValue('blue.200', 'blue.800')}
			/>

			<CurrentInterestItem
				title="Content Creation"
				description="Sharing past experiences and opinionated views through blogging, memeing, and more"
				icon={ImQuill}
				iconColor={useColorModeValue('green.800', 'green.200')}
				iconBgColor={useColorModeValue('green.100', 'teal.900')}
			/>
		</>
	)
}

interface CurrentInterestItemProps {
	title: string
	description: string
	icon?: IconType
	iconColor?: string
	iconBgColor?: string
}

const CurrentInterestItem = (props: CurrentInterestItemProps) => {
	const backgroundColor = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			align="center"
			borderRadius="8px"
			bgColor={backgroundColor}
			p="16px"
			pr="0"
			m="16px 4px"
			boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
		>
			<Flex
				align="center"
				justify="center"
				bgColor={props.iconBgColor}
				w="48px"
				h="48px"
				mr="16px"
				borderRadius="12px"
			>
				{props.icon ? (
					<Icon as={props.icon} color={props.iconColor} fontSize="x-large" />
				) : (
					<Image src="/images/homepage/gofan.png" width="48px" height="48px" alt="GoFan logo" />
				)}
			</Flex>

			<Flex flexDir="column" justify="center" w="calc(100% - 104px)">
				<Heading as="h3" fontSize={['md', 'lg']} pb="4px">
					{props.title}
				</Heading>
				<Text as="p" lineHeight="1.1" fontSize={['sm', 'md']}>
					{props.description}
				</Text>
			</Flex>
		</Flex>
	)
}

export { CurrentInterests, CurrentInterestItem }
