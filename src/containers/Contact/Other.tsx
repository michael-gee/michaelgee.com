import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { SiDiscord, SiProtonmail } from 'react-icons/si'
export const OtherContactMethods = () => {
	return (
		<Box as="section" py="16px" textAlign="center">
			<Box as="h2" fontSize="1.4em">
				other ways to contact...
			</Box>

			<Flex justify="center" align="center" my="24px">
				<Icon
					as={SiProtonmail}
					color={useColorModeValue('#3182ce', '#90cdf4')}
					boxSize={5}
					mr="8px"
				/>
				michaelgee.dev@protonmail.com
			</Flex>

			<Flex justify="center" align="center" my="24px">
				<Icon
					as={SiDiscord}
					color={useColorModeValue('#3182ce', '#90cdf4')}
					boxSize={5}
					mr="10px"
				/>
				michaelg33#9503
			</Flex>
		</Box>
	)
}
