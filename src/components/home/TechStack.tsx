import { chakra, Box, Flex, Heading, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

// ********** Tech Stack Container **********
interface TechStackProps {
	children?: React.ReactNode
}

const TechStack = (props: TechStackProps) => {
	return (
		<Flex flexDir={['column', 'row']} justify="space-between">
			{props.children}
		</Flex>
	)
}

// ********** Tech Stack Section **********
interface TechStackSectionProps {
	title: string
	pos: 'left' | 'right'
	children?: React.ReactNode
}

const TechStackSection = (props: TechStackSectionProps) => {
	const backgroundColor = useColorModeValue('light.container', 'dark.container')
	const borderColor = useColorModeValue('light.border', 'dark.border')

	return (
		<Box
			as={chakra.section}
			w={['100%', '50%']}
			bgColor={backgroundColor}
			borderWidth="1px"
			borderColor={borderColor}
			borderRadius="12px"
			mr={['0', props.pos === 'left' ? '8px' : '0']}
			ml={['0', props.pos === 'right' ? '8px' : '0']}
			my={['8px', '0']}
			textAlign="center"
		>
			<Heading as="h3" fontSize="lg" fontWeight="bold" fontStyle="italic" pt="16px" pb="8px">
				{props.title}
			</Heading>

			<Flex wrap="wrap">{props.children}</Flex>
		</Box>
	)
}

//  ********** Tech Stack Icon **********
interface TechStackIconProps {
	icon: IconType
	name: string
}

const TechStackIcon = (props: TechStackIconProps) => {
	const color = useColorModeValue('light.text', 'dark.text')

	return (
		<Box w="33%" my="16px">
			<Icon as={props.icon} fontSize="2em" color={color} aria-label={props.name} />
			<Text>{props.name}</Text>
		</Box>
	)
}

export { TechStack, TechStackSection, TechStackIcon }
