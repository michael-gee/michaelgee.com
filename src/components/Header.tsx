import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaBlog, FaCode, FaMoon } from 'react-icons/fa' // FaRocket
import { FiSun, FiChevronDown } from 'react-icons/fi'

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
			bg={useColorModeValue('white', 'gray.800')}
			display={['none', 'flex']}
			pos="fixed"
			borderBottomWidth="2px"
			borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
			shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
			zIndex="overlay"
		>
			<Container>
				<Flex justify="space-between" alignItems="center">
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

					<Flex as="nav" ml="16px">
						<Link href="/about">
							<Button
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
									_isCurrentRoute(['/blog', '/blog/[slug]', '/projects', '/experience', '/memes'])
										? primaryColor
										: 'default'
								}
							>
								Works
							</MenuButton>
							<MenuList>
								<Link href="/blog">
									<MenuItem
										icon={<FaBlog />}
										color={_isCurrentRoute(['/blog', '/blog/[slug]']) ? primaryColor : 'default'}
									>
										Blog
									</MenuItem>
								</Link>

								<Link href="/projects">
									<MenuItem
										icon={<FaCode />}
										color={_isCurrentRoute(['/projects']) ? primaryColor : 'default'}
									>
										Projects
									</MenuItem>
								</Link>

								<Link href="/experience">
									<MenuItem
										icon={<BsFillBriefcaseFill />}
										color={_isCurrentRoute(['/experience']) ? primaryColor : 'default'}
									>
										Experience
									</MenuItem>
								</Link>

								{/* <Link href="/memes">
									<MenuItem
										icon={<FaRocket />}
										color={_isCurrentRoute(['/memes']) ? primaryColor : 'default'}
									>
										Memes
									</MenuItem>
								</Link> */}
							</MenuList>
						</Menu>

						<Link href="/contact">
							<Button
								mx="4px"
								variant="ghost"
								color={_isCurrentRoute(['/contact']) ? primaryColor : 'default'}
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
