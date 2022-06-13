import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	chakra,
	Flex,
	IconButton,
	Link as ChakraLink,
	Menu,
	MenuButton,
	MenuDivider,
	MenuList,
	MenuItem,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import {
	FaCode,
	FaDev,
	FaHome,
	FaMoon,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaUser
} from 'react-icons/fa'
import { FiMenu, FiSun } from 'react-icons/fi'
import { ImQuill } from 'react-icons/im'
import { MdTimeline } from 'react-icons/md'

export const MobileNav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const textColor = useColorModeValue('light.link', 'dark.link')
	const router = useRouter()
	const isDark = colorMode === 'dark'

	return (
		<Flex
			as="footer"
			display={['flex', 'none']}
			w="calc(100% - 32px)"
			h="64px"
			basis="auto"
			pos="fixed"
			bottom={0}
			right={0}
			left={0}
			m="16px"
			bg={useColorModeValue('white', 'gray.800')}
			borderWidth="2px"
			borderTopColor={useColorModeValue('gray.100', 'gray.700')}
			borderRadius="16px"
			zIndex="overlay"
			data-id="mobile-nav"
		>
			<Flex align="center" justify="center" w="33%">
				<IconButton
					icon={isDark ? <FiSun /> : <FaMoon />}
					onClick={toggleColorMode}
					variant="ghost"
					size="lg"
					isRound
					aria-label="Toggle Light or Dark Theme"
				/>
			</Flex>

			<Flex align="center" justify="center" w="33%">
				<Link href="/" passHref>
					<IconButton
						as={chakra.a}
						variant="ghost"
						isRound
						_hover={{ backgroundColor: 'transparent' }}
						aria-label=""
					>
						<Image
							src="/images/michael.jpg"
							width={32}
							height={32}
							alt="Michael Gee"
							className="is-round"
						/>
					</IconButton>
				</Link>
			</Flex>

			<Flex as="nav" align="center" justify="center" w="33%">
				<Menu placement="auto">
					<MenuButton
						as={IconButton}
						icon={<FiMenu />}
						variant="ghost"
						size="lg"
						isRound
						aria-label="Mobile Navigation Menu"
					/>

					<MenuList>
						<Flex justify="space-evenly">
							<IconButton
								as={ChakraLink}
								href="https://twitter.com/michaelgee_"
								isExternal
								icon={<FaTwitter />}
								variant="ghost"
								isRound
								aria-label="Twitter Profile Link Button"
							/>

							<IconButton
								as={ChakraLink}
								href="https://dev.to/michaelgee"
								isExternal
								icon={<FaDev />}
								variant="ghost"
								isRound
								aria-label="Dev.to Profile Link Button"
							/>

							<IconButton
								as={ChakraLink}
								href="https://github.com/michael-gee"
								isExternal
								icon={<FaGithub />}
								variant="ghost"
								isRound
								aria-label="Github Profile Link Button"
							/>

							<IconButton
								as={ChakraLink}
								href="https://www.linkedin.com/in/michael-gee/"
								isExternal
								icon={<FaLinkedin />}
								variant="ghost"
								isRound
								aria-label="LinkedIn Profile Link Button"
							/>
						</Flex>

						<MenuDivider />

						<Link href="/" passHref>
							<MenuItem
								as={chakra.a}
								icon={<FaHome />}
								color={_isCurrentRoute(['/']) ? textColor : 'default'}
							>
								Home
							</MenuItem>
						</Link>

						{/* <Link href="/about" passHref>
							<MenuItem
								as={chakra.a}
								icon={<FaUser />}
								color={_isCurrentRoute(['/about']) ? textColor : 'default'}
							>
								About
							</MenuItem>
						</Link> */}

						<Link href="/blog" passHref>
							<MenuItem
								as={chakra.a}
								icon={<ImQuill />}
								color={_isCurrentRoute(['/blog', '/blog/[slug]']) ? textColor : 'default'}
							>
								Blog
							</MenuItem>
						</Link>

						<Link href="/projects" passHref>
							<MenuItem
								as={chakra.a}
								icon={<FaCode />}
								color={_isCurrentRoute(['/projects']) ? textColor : 'default'}
							>
								Projects
							</MenuItem>
						</Link>

						<Link href="/timeline" passHref>
							<MenuItem
								as={chakra.a}
								icon={<MdTimeline />}
								color={_isCurrentRoute(['/timeline']) ? textColor : 'default'}
							>
								Timeline
							</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	)

	function _isCurrentRoute(routes: string[]) {
		return routes.includes(router.pathname)
	}
}
