import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	chakra,
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { MdTimeline } from 'react-icons/md'
import { FaCode, FaMoon } from 'react-icons/fa' // FaRocket
import { FiSun, FiChevronDown } from 'react-icons/fi'
import { ImQuill } from 'react-icons/im'

export const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const primaryColor = useColorModeValue('primary.light', 'primary.dark')
	const router = useRouter()
	const isDark = colorMode === 'dark'

	return (
		<Flex
			as="header"
			alignItems="center"
			w="100%"
			h="64px"
			bgColor={useColorModeValue('white', 'gray.800')}
			display={['none', 'flex']}
			pos="fixed"
			borderBottomWidth="2px"
			borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
			shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
			zIndex="overlay"
		>
			<Container>
				<Flex justify="space-between" alignItems="center">
					<Link href="/" passHref>
						<Button
							as={chakra.a}
							display="flex"
							align="center"
							cursor="pointer"
							variant="ghost"
							aria-label="Homepage navigation button"
							_hover={{ backgroundColor: 'transparent' }}
						>
							<Image
								src="/images/michael.jpg"
								width={32}
								height={32}
								alt="Michael Gee"
								className="is-round"
							/>
						</Button>
					</Link>

					<Flex as="nav" ml="16px">
						<Link href="/about" passHref>
							<Button
								as={chakra.a}
								minW="80px"
								mx="4px"
								variant="ghost"
								color={_isCurrentRoute(['/about']) ? primaryColor : 'default'}
							>
								About
							</Button>
						</Link>

						<Menu isLazy={true}>
							<MenuButton
								as={Button}
								rightIcon={<FiChevronDown />}
								mx="4px"
								variant="ghost"
								color={
									_isCurrentRoute(['/blog', '/blog/[slug]', '/projects', '/timeline', '/memes'])
										? primaryColor
										: 'default'
								}
							>
								Menu
							</MenuButton>

							<MenuList>
								<Link href="/blog" passHref>
									<MenuItem
										as={chakra.a}
										icon={<ImQuill />}
										color={_isCurrentRoute(['/blog', '/blog/[slug]']) ? primaryColor : 'default'}
									>
										Blog
									</MenuItem>
								</Link>

								<Link href="/projects" passHref>
									<MenuItem
										as={chakra.a}
										icon={<FaCode />}
										color={_isCurrentRoute(['/projects']) ? primaryColor : 'default'}
									>
										Projects
									</MenuItem>
								</Link>

								<Link href="/timeline" passHref>
									<MenuItem
										as={chakra.a}
										icon={<MdTimeline />}
										color={_isCurrentRoute(['/timeline']) ? primaryColor : 'default'}
									>
										Timeline
									</MenuItem>
								</Link>

								{/* <Link href="/memes" passHref>
									<MenuItem
										as={chakra.a}
										icon={<FaRocket />}
										color={_isCurrentRoute(['/memes']) ? primaryColor : 'default'}
									>
										Memes
									</MenuItem>	
								</Link> */}
							</MenuList>
						</Menu>

						<Link href="/contact" passHref>
							<Button
								as={chakra.a}
								variant="ghost"
								color={_isCurrentRoute(['/contact']) ? primaryColor : 'default'}
								mx="4px"
							>
								Contact
							</Button>
						</Link>
					</Flex>

					<Button onClick={toggleColorMode} variant="ghost">
						{isDark ? <FiSun /> : <FaMoon />}
					</Button>
				</Flex>
			</Container>
		</Flex>
	)

	function _isCurrentRoute(routes: string[]) {
		return routes.includes(router.pathname)
	}
}
