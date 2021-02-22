import Image from 'next/image'
import {
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react'
import { FaMoon } from 'react-icons/fa'
import { FiMenu, FiSun } from 'react-icons/fi'

export const MobileNav = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Flex
			as="nav"
			display={['flex', 'none']}
			w="100%"
			h="64px"
			basis="auto"
			pos="fixed"
			bottom={0}
			right={0}
			left={0}
			pb="8px"
			bg={useColorModeValue('white', 'gray.800')}
			borderTopWidth="2px"
			borderTopColor={useColorModeValue('gray.100', 'gray.700')}
			data-id="mobile-nav"
		>
			<IconButton
				icon={isDark ? <FiSun /> : <FaMoon />}
				onClick={toggleColorMode}
				variant="ghost"
				size="lg"
				h="100%"
				w="33%"
				_focus={{}}
				aria-label={isDark ? '' : ''}
			/>

			<Flex align="center" justify="center" w="33%" h="100%">
				<Image src="/images/michael.jpg" width="32px" height="32px" className="round-img" />
			</Flex>

			<Menu>
				<MenuButton
					as={IconButton}
					icon={<FiMenu />}
					variant="ghost"
					size="lg"
					w="33%"
					h="100%"
					_focus={{}}
				/>
				<MenuList>
					<MenuItem>Home</MenuItem>
					<MenuItem>Blog</MenuItem>
					<MenuItem>Projects</MenuItem>
					<MenuItem>Experience</MenuItem>
					<MenuItem>Contact</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	)
}
