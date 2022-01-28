import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	chakra,
	Button,
	Icon,
	IconButton,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { FaRegUser, FaMoon } from 'react-icons/fa' // FaRocket
import { FiSun, FiMoreHorizontal } from 'react-icons/fi'
import { BsChatDots } from 'react-icons/bs'

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
								alt="Michael Gee profile image"
								className="is-round"
							/>
						</Button>
					</Link>

					<Flex as="nav" ml="16px">
						<Link href="/blog" passHref>
							<Button
								as={chakra.a}
								variant="ghost"
								color={_isCurrentRoute(['/blog', '/blog/[slug]']) ? primaryColor : 'default'}
								mx="4px"
							>
								Blog
							</Button>
						</Link>

						<Link href="/projects" passHref>
							<Button
								as={chakra.a}
								minW="80px"
								mx="4px"
								variant="ghost"
								color={_isCurrentRoute(['/projects']) ? primaryColor : 'default'}
							>
								Projects
							</Button>
						</Link>

						<Link href="/timeline" passHref>
							<Button
								as={chakra.a}
								variant="ghost"
								color={_isCurrentRoute(['/timeline']) ? primaryColor : 'default'}
								mx="4px"
							>
								Timeline
							</Button>
						</Link>

						<Menu isLazy={true}>
							<MenuButton
								mx="4px"
								borderRadius="8px"
								_hover={{ backgroundColor: 'rgba(255, 255, 255, 0.08);' }}
							>
								<IconButton
									icon={<Icon as={FiMoreHorizontal} />}
									aria-label="Additional options menu"
								/>
							</MenuButton>

							<MenuList>
								<Link href="/about" passHref>
									<MenuItem
										as={chakra.a}
										icon={<FaRegUser />}
										color={_isCurrentRoute(['/about']) ? primaryColor : 'default'}
									>
										About
									</MenuItem>
								</Link>

								<Link href="/contact" passHref>
									<MenuItem
										as={chakra.a}
										icon={<BsChatDots />}
										color={_isCurrentRoute(['/contact']) ? primaryColor : 'default'}
									>
										Contact
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
					</Flex>

					<Button onClick={toggleColorMode}>{isDark ? <FiSun /> : <FaMoon />}</Button>
				</Flex>
			</Container>
		</Flex>
	)

	function _isCurrentRoute(routes: string[]) {
		return routes.includes(router.pathname)
	}
}
