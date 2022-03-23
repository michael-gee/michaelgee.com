import { Container } from './Container'
import { Box, Flex, Icon, IconButton, Link as ChakraLink } from '@chakra-ui/react'
import { FaCanadianMapleLeaf, FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
	const color = '#718096'

	return (
		<Flex as="footer" my="16px" color={color} display={['none', 'flex']}>
			<Container>
				<Flex justify="space-between" align="center">
					<Flex align="center">
						<Icon as={FaCanadianMapleLeaf} mr="8px" color="red.500" />
						<Box as="span" fontSize="sm">
							Coded by
							<ChakraLink href="https://github.com/michael-gee/michaelgee.com" isExternal ml="4px">
								Michael Gee
							</ChakraLink>{' '}
							| Inspired by
							<ChakraLink href="https://github.com/wirtzdan/website" isExternal ml="4px">
								Daniel Wirtz
							</ChakraLink>
						</Box>
					</Flex>

					<Flex>
						<IconButton
							as={ChakraLink}
							href="https://twitter.com/michaelgee_"
							isExternal
							icon={<FaTwitter />}
							color={color}
							isRound
							mx="6px"
							aria-label="Twitter Profile Link"
						/>

						<IconButton
							as={ChakraLink}
							href="https://dev.to/michaelgee"
							isExternal
							icon={<FaDev />}
							color={color}
							isRound
							mx="6px"
							aria-label="Dev.to Profile Link"
						/>

						<IconButton
							as={ChakraLink}
							href="https://github.com/michael-gee"
							isExternal
							icon={<FaGithub />}
							color={color}
							isRound
							mx="6px"
							aria-label="Github Profile Link"
						/>

						<IconButton
							as={ChakraLink}
							href="https://www.linkedin.com/in/michael-gee/"
							isExternal
							icon={<FaLinkedin />}
							color={color}
							isRound
							mx="6px"
							mr="0"
							aria-label="LinkedIn Profile Link"
						/>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}
