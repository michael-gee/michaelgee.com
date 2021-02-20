import { Flex, Icon, IconButton, Link } from '@chakra-ui/react'
import { Container } from './Container'
import { FaCanadianMapleLeaf, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
	return (
		<Flex as="footer" my="16px" display={['none', 'flex']}>
			<Container>
				<Flex justify="space-between" align="center">
					<Flex align="center">
						<Icon as={FaCanadianMapleLeaf} mr="8px" color="red.500" />
						Michael Gee
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
}
