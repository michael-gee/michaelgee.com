import { Box, Flex, Heading, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

// ********** Tech Stack Container **********
interface TechStackProps {
	children?: React.ReactNode
}

const TechStack = (props: TechStackProps) => {
	return <Box py={['8px', '16px']}>{props.children}</Box>
}

// ********** Tech Stack Section **********
interface TechStackSectionProps {
	title: string
	children?: React.ReactNode
}

const TechStackSection = (props: TechStackSectionProps) => {
	return (
		<Flex as="section" flexDir={['column', 'row']} py={['8px', '24px']}>
			<Heading
				as="h3"
				size="lg"
				minW="164px"
				fontWeight="normal"
				pb={['16px', '16px', '0']}
				textAlign={['center', 'center', 'start']}
				fontStyle="italic"
			>
				{props.title}
			</Heading>

			<Flex w="100%" wrap="wrap" align="center" justify="space-evenly">
				{props.children}
			</Flex>
		</Flex>
	)
}

// ********** Tech Stack Icon **********
interface TechStackIconProps {
	icon: IconType
	iconName: string
	size?: string
}

const TechStackIcon = (props: TechStackIconProps) => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const iconSize = props.size ? props.size : '2em'

	return (
		<Tooltip label={props.iconName} placement="bottom" aria-label={props.iconName}>
			<Box as="span">
				<Icon as={props.icon} color={color} fontSize={iconSize} />
			</Box>
		</Tooltip>
	)
}

export { TechStack, TechStackSection, TechStackIcon }
