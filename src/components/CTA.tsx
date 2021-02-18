import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
	<Container flexDirection="row" position="fixed" bottom="0" width="100%" maxWidth="48rem" py={2}>
		<ChakraLink
			isExternal
			href="https://github.com/michaelgee22/michaelgee.com"
			flexGrow={3}
			mx={2}
			_hover={{ textDecor: 'none' }}
		>
			<Button width="100%" variant="solid" colorScheme="blue">
				View Repo
			</Button>
		</ChakraLink>
	</Container>
)
