import { Box, Flex, Heading } from '@chakra-ui/react'

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

export { TechStack, TechStackSection }
