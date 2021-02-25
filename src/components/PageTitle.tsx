import { Flex, Heading } from '@chakra-ui/react'

interface Props {
	title: string
	children?: React.ReactNode
}

export const PageTitle = (props: Props) => (
	<Flex justify="space-between" pb="4px" borderBottomWidth="2px">
		<Heading size="lg" fontWeight="normal">
			{props.title}
		</Heading>
		{props.children}
	</Flex>
)
