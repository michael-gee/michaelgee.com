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
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'

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
			bgColor={useColorModeValue('white', '#2D333B')}
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
						<IconButton
							as={chakra.a}
							isRound
							bgColor="transparent"
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
						</IconButton>
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
					</Flex>

					<IconButton
						icon={<Icon as={isDark ? FiSun : FaMoon} />}
						onClick={toggleColorMode}
						isRound
						aria-label="Dark & light mode toggle button"
					/>
				</Flex>
			</Container>
		</Flex>
	)

	function _isCurrentRoute(routes: string[]) {
		return routes.includes(router.pathname)
	}
}
