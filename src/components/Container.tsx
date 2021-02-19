import { Box } from '@chakra-ui/react'

interface Props {
	children: React.ReactNode
}

export const Container = (props: Props) => (
	<Box w="704px" maxW="100%" p="0 32px" m="0 auto">
		{props.children}
	</Box>
)
