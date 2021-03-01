import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { SiDiscord, SiProtonmail } from 'react-icons/si'
export const OtherContactMethods = () => {
	return (
		<Box as="section" py="16px" textAlign="center">
			<Box as="h2" fontSize="1.4em">
				other ways to contact...
			</Box>

			<Flex justify="center" align="center" my="16px">
				<Icon
					as={SiProtonmail}
					color={useColorModeValue('primary.light', 'primary.dark')}
					boxSize={5}
					mr="8px"
				/>
				michaelgee.dev@protonmail.com
			</Flex>

			<Flex justify="center" align="center" my="16px">
				<Icon
					as={SiDiscord}
					color={useColorModeValue('primary.light', 'primary.dark')}
					boxSize={5}
					mr="10px"
				/>
				michaelg33#9503
			</Flex>
		</Box>
	)
}
