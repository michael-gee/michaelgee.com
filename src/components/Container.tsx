import { Box, Fade } from '@chakra-ui/react'

interface Props {
	children: React.ReactNode
}

export const Container = (props: Props) => (
	<Box w="768px" maxW="100%" px={['16px', '32px']} pt={['8px', '0']} mx="auto" transition=".5s">
		<Fade in>{props.children}</Fade>
	</Box>
)
