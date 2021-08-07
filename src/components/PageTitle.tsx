import { Flex, Heading } from '@chakra-ui/react'

interface Props {
	title: string
	borderless?: boolean
	children?: React.ReactNode
}

export const PageTitle = (props: Props) => (
	<Flex justify="space-between" py="8px" borderBottomWidth={props.borderless ? '0' : '2px'}>
		<Heading size="lg" fontWeight="normal">
			{props.title}
		</Heading>
		{props.children}
	</Flex>
)
