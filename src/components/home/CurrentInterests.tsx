import { Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

import { FaDiscord } from 'react-icons/fa'
import { IoConstruct } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { ImQuill } from 'react-icons/im'

const CurrentInterests = () => {
	return (
		<>
			<CurrentInterestItem
				title="GoFan"
				description="(Primary Focus) Leading UI/UX/DX initiatives for both admin and customer facing apps"
				iconColor={useColorModeValue('gray.700', 'gray.700')}
				iconBgColor={useColorModeValue('gray.400', 'gray.400')}
			/>

			<CurrentInterestItem
				title="Community"
				description="Engaging & moderating my all-time favorite software development communities"
				icon={FaDiscord}
				iconColor={useColorModeValue('#645494', '#D6BCFA')}
				iconBgColor={useColorModeValue('#E9D8FD', '#353245')}
			/>

			<CurrentInterestItem
				title="Side Project(s)"
				description="Bringing ideas to life by building exciting solutions that I'm passionate about (coming soon...)"
				icon={IoConstruct}
				iconColor={useColorModeValue('#365071', '#7CAFD1')}
				iconBgColor={useColorModeValue('#BEE3F8', '#2A3644')}
			/>

			<CurrentInterestItem
				title="Content Creation"
				description="Sharing past experiences and opinionated views through blogging, memeing, and more"
				icon={ImQuill}
				iconColor={useColorModeValue('#30614A', '#9AE6B4')}
				iconBgColor={useColorModeValue('#C6F7D5', '#2B3A3A')}
			/>
		</>
	)
}

interface CurrentInterestItemProps {
	title: string
	description: string
	icon?: IconType
	iconColor: string
	iconBgColor: string
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
				<Heading as="h3" fontSize="lg" pb="4px">
					{props.title}
				</Heading>
				<Text as="p" lineHeight="1.1">
					{props.description}
				</Text>
			</Flex>
		</Flex>
	)
}

export { CurrentInterests, CurrentInterestItem }
