import { Container } from './Container'
import { Box, Flex, Icon, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import { FaCanadianMapleLeaf, FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => (
	<Flex as="footer" my="16px" display={['none', 'flex']}>
		<Container>
			<Flex justify="space-between" align="center">
				<Flex align="center">
					<Icon as={FaCanadianMapleLeaf} mr="8px" color="red.500" />
					<Box as="span" fontSize="sm">
						Coded by
						<ChakraLink href="https://github.com/michaelgee22/michaelgee.com" isExternal pl="4px">
							Michael Gee
						</ChakraLink>{' '}
						| Inspired by
						<ChakraLink href="https://github.com/wirtzdan/website" isExternal pl="4px">
							Daniel Wirtz
						</ChakraLink>
					</Box>
				</Flex>

				<Flex>
					<IconButton
						as={ChakraLink}
						href="https://twitter.com/michaelgee7"
						isExternal
						icon={<FaTwitter />}
						variant="ghost"
						isRound
						mx="4px"
						aria-label="Twitter Profile Link"
					/>

					<IconButton
						as={ChakraLink}
						href="https://dev.to/michaelgee"
						isExternal
						icon={<FaDev />}
						variant="ghost"
						isRound
						mx="4px"
						aria-label="Dev.to Profile Link"
					/>

					<IconButton
						as={ChakraLink}
						href="https://github.com/michaelgee22"
						isExternal
						icon={<FaGithub />}
						variant="ghost"
						isRound
						mx="4px"
						aria-label="Github Profile Link"
					/>

					<IconButton
						as={ChakraLink}
						href="https://www.linkedin.com/in/michael-gee/"
						isExternal
						icon={<FaLinkedin />}
						variant="ghost"
						isRound
						mx="4px"
						aria-label="LinkedIn Profile Link"
					/>
				</Flex>
			</Flex>
		</Container>
	</Flex>
)
