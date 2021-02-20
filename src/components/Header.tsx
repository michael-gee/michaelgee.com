import Image from 'next/image'
import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, useColorMode } from '@chakra-ui/react'
import { Container } from './Container'
import { FaBriefcase, FaCode, FaMoon } from 'react-icons/fa'
import { FiSun, FiChevronDown } from 'react-icons/fi'

export const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Flex
			as="header"
			alignItems="center"
			w="100%"
			h="64px"
			display={['none', 'flex', 'flex', 'flex']}
			borderBottom="2px solid #2D3748"
		>
			<Container>
				<Flex justify="space-between" alignItems="center">
					<Image src="/images/michael.jpg" width="32px" height="32px" className="round-img" />

					<Flex as="nav" ml="16px">
						<Button minW="80px" m="0 4px" backgroundColor="transparent">
							Blog
						</Button>

						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<FiChevronDown />}
								m="0 4px"
								backgroundColor="transparent"
							>
								Works
							</MenuButton>
							<MenuList>
								<MenuItem icon={<FaCode />}>Projects</MenuItem>
								<MenuItem icon={<FaBriefcase />}>Experience</MenuItem>
							</MenuList>
						</Menu>

						<Button m="0 4px" backgroundColor="transparent">
							Contact
						</Button>
					</Flex>

					<Button onClick={toggleColorMode} backgroundColor="transparent">
						{isDark ? <FiSun /> : <FaMoon />}
					</Button>
				</Flex>
			</Container>
		</Flex>
	)
}
