import Image from 'next/image'
import Link from 'next/link'
import {
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
	FaBlog,
	FaCode,
	FaDev,
	FaHome,
	FaMoon,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaUser
} from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FiMenu, FiSun } from 'react-icons/fi'
import { FaRocket } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const MobileNav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Flex
			as="footer"
			display={['flex', 'none']}
			w="100%"
			h="64px"
			basis="auto"
			pos="fixed"
			bottom={0}
			right={0}
			left={0}
			pt="24px"
			pb="40px"
			bg={useColorModeValue('white', 'gray.800')}
			borderTopWidth="2px"
			borderTopColor={useColorModeValue('gray.100', 'gray.700')}
			zIndex="overlay"
			data-id="mobile-nav"
		>
			<Flex align="center" justify="center" w="33%" h="100%">
				<IconButton
					icon={isDark ? <FiSun /> : <FaMoon />}
					onClick={toggleColorMode}
					variant="ghost"
					size="lg"
					aria-label="Toggle Light/Dark Theme"
					_hover={{}}
					_active={{}}
					_focus={{}}
				/>
			</Flex>

			<Flex align="center" justify="center" w="33%" h="100%">
				<Link href="/">
					<Flex as="a" align="center" cursor="pointer">
						<Image
							src="/images/michael.jpg"
							width={32}
							height={32}
							alt="Michael Gee"
							className="round-img"
						/>
					</Flex>
				</Link>
			</Flex>

			<Flex as="nav" align="center" justify="center" w="33%" h="100%">
				<Menu placement="auto">
					<MenuButton
						as={IconButton}
						icon={<FiMenu />}
						variant="ghost"
						size="lg"
						aria-label="Mobile Navigation Menu"
						_hover={{}}
						_active={{}}
						_focus={{}}
					/>
					<MenuList>
						<Flex justify="space-evenly">
							<ChakraLink href="https://twitter.com/michaelgee7" isExternal>
								<IconButton
									icon={<FaTwitter />}
									variant="ghost"
									isRound
									aria-label="Twitter Profile Link Button"
								/>
							</ChakraLink>

							<ChakraLink href="https://dev.to/michaelgee" isExternal>
								<IconButton
									icon={<FaDev />}
									variant="ghost"
									isRound
									aria-label="Dev.to Profile Link Button"
								/>
							</ChakraLink>

							<ChakraLink href="https://github.com/michaelgee22" isExternal>
								<IconButton
									icon={<FaGithub />}
									variant="ghost"
									isRound
									aria-label="Github Profile Link Button"
								/>
							</ChakraLink>

							<ChakraLink href="https://www.linkedin.com/in/michael-gee/" isExternal>
								<IconButton
									icon={<FaLinkedin />}
									variant="ghost"
									isRound
									aria-label="LinkedIn Profile Link Button"
								/>
							</ChakraLink>
						</Flex>

						<MenuDivider />

						<Link href="/">
							<MenuItem icon={<FaHome />}>Home</MenuItem>
						</Link>
						<Link href="/about">
							<MenuItem icon={<FaUser />}>About</MenuItem>
						</Link>
						<Link href="/blog">
							<MenuItem icon={<FaBlog />}>Blog</MenuItem>
						</Link>
						<Link href="/projects">
							<MenuItem icon={<FaCode />}>Projects</MenuItem>
						</Link>
						<Link href="/experience">
							<MenuItem icon={<BsFillBriefcaseFill />}>Experience</MenuItem>
						</Link>
						<Link href="/memes">
							<MenuItem icon={<FaRocket />}>Memes</MenuItem>
						</Link>
						<Link href="/contact">
							<MenuItem icon={<IoMdMail />}>Contact</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	)
}
