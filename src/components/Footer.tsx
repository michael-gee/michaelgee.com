import { Box, Flex, Icon, IconButton, Link } from '@chakra-ui/react'
import { Container } from './Container'
import { FaCanadianMapleLeaf, FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => (
	<Flex as="footer" my="16px" display={['none', 'flex']}>
		<Container>
			<Flex justify="space-between" align="center">
				<Flex align="center">
					<Icon as={FaCanadianMapleLeaf} mr="8px" color="red.500" />
					<Box as="span" fontSize="sm">
						Coded by
						<Link href="https://github.com/michaelgee22/michaelgee.com" isExternal pl="4px">
							Michael Gee
						</Link>{' '}
						| Inspired by
						<Link href="https://github.com/wirtzdan/website" isExternal pl="4px">
							Daniel Wirtz
						</Link>
					</Box>
				</Flex>

				<Flex>
					<Link href="https://twitter.com/michaelgee7" isExternal>
						<IconButton
							icon={<FaTwitter />}
							variant="ghost"
							isRound
							mx="4px"
							aria-label="Twitter Profile Link Button"
						/>
					</Link>

					<Link href="https://dev.to/michaelgee" isExternal>
						<IconButton
							icon={<FaDev />}
							variant="ghost"
							isRound
							mx="4px"
							aria-label="Dev.to Profile Link Button"
						/>
					</Link>

					<Link href="https://github.com/michaelgee22" isExternal>
						<IconButton
							icon={<FaGithub />}
							variant="ghost"
							isRound
							mx="4px"
							aria-label="Github Profile Link Button"
						/>
					</Link>

					<Link href="https://www.linkedin.com/in/michael-gee/" isExternal>
						<IconButton
							icon={<FaLinkedin />}
							variant="ghost"
							isRound
							mx="4px"
							aria-label="LinkedIn Profile Link Button"
						/>
					</Link>
				</Flex>
			</Flex>
		</Container>
	</Flex>
)
