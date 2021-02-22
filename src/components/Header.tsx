import Image from 'next/image'
import Link from 'next/link'
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
import { Container } from './Container'
import { FaCode, FaMoon } from 'react-icons/fa'
import { FiBriefcase, FiSun, FiChevronDown } from 'react-icons/fi'

export const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
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
		>
			<Container>
				<Flex justify="space-between" alignItems="center">
					<Link href="/">
						<Flex as="a" align="center" cursor="pointer">
							<Image src="/images/michael.jpg" width="32px" height="32px" className="round-img" />
						</Flex>
					</Link>

					<Flex as="nav" ml="16px">
						<Link href="/blog">
							<Button minW="80px" mx="4px" variant="ghost">
								Blog
							</Button>
						</Link>

						<Menu isLazy={true}>
							<MenuButton as={Button} rightIcon={<FiChevronDown />} mx="4px" variant="ghost">
								Works
							</MenuButton>
							<MenuList>
								<Link href="/projects">
									<MenuItem icon={<FaCode />}>Projects</MenuItem>
								</Link>

								<Link href="experience">
									<MenuItem icon={<FiBriefcase />}>Experience</MenuItem>
								</Link>
							</MenuList>
						</Menu>

						<Link href="/contact">
							<Button mx="4px" variant="ghost">
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
}
