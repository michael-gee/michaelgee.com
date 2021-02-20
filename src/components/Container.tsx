import { Box } from '@chakra-ui/react'

interface Props {
	children: React.ReactNode
}

export const Container = (props: Props) => (
	<Box w="768px" maxW="100%" px="32px" mx="auto">
		{props.children}
	</Box>
)
