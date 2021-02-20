import { Box, Flex, Link, IconButton } from '@chakra-ui/react'
import { Container } from './Container'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
	return (
		<Flex as="footer" m="16px 0" display={['none', 'flex', 'flex', 'flex']}>
			<Container>
				<Flex justify="space-between" align="center">
					<Box>&#169; 2021 Michael Gee</Box>

					<Flex>
						<Link href="https://twitter.com/michaelgee7" isExternal>
							<IconButton
								icon={<FaTwitter />}
								backgroundColor="transparent"
								isRound
								m="0 4px"
								aria-label="Twitter Profile Link Button"
							/>
						</Link>

						<Link href="https://github.com/michaelgee22" isExternal>
							<IconButton
								icon={<FaGithub />}
								backgroundColor="transparent"
								isRound
								m="0 4px"
								aria-label="Github Profile Link Button"
							/>
						</Link>

						<Link href="https://www.linkedin.com/in/michael-gee/" isExternal>
							<IconButton
								icon={<FaLinkedin />}
								backgroundColor="transparent"
								isRound
								m="0 4px"
								aria-label="LinkedIn Profile Link Button"
							/>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}
