import Image from 'next/image'
import { Box, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { BoxProps } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

// ********** Intro Container **********
interface IntroProps {
	children?: React.ReactNode
}

const Intro = (props: IntroProps) => {
	const color = useColorModeValue('light.tertiary', 'dark.tertiary')

	return (
		<>
			<Flex
				flexDir={['column', 'row']}
				align="center"
				justify="space-around"
				mt={['0', '24px']}
				mb="24px"
			>
				<Flex height={['auto', '240px']} my={['32px', '0']} flexDir="column" justify="center">
					<Heading as="h1" fontSize="5xl">
						Michael Gee
					</Heading>

					<Heading as="h2" fontSize="2xl" color={color} mx={['auto', '0']}>
						<Box as="span" float="left" h="40px" mr="6px">
							Software
						</Box>
						<Box as="span" float="left" overflow="hidden" pos="relative" h="40px">
							<Box
								as="span"
								display="inline-block"
								pos="relative"
								whiteSpace="nowrap"
								top={0}
								left={0}
								className="vertical-text-scroll"
							>
								<Box h="40px">Developer</Box>
								<Box h="40px">Enthusiast</Box>
								<Box h="40px">Blogger</Box>
								<Box h="40px">Consultant</Box>
								<Box h="40px">Memer</Box>
							</Box>
						</Box>
					</Heading>
				</Flex>

				<Image
					src="/images/homepage/coding.png"
					width="240px"
					height="240px"
					alt="Software Developer Illustration"
				/>
			</Flex>

			{props.children}
		</>
	)
}

// ********** Intro Tile Section **********
interface IntroTileSectionProps extends BoxProps {
	children: React.ReactNode
}

const IntroTileSection = (props: IntroTileSectionProps) => {
	const styleProps = { ...props }
	delete styleProps.children

	return (
		<Flex flexDir={['column', 'row']} justify="space-between" {...styleProps}>
			{props.children}
		</Flex>
	)
}

// ********** Intro Tile **********
interface IntroTileProps {
	title: string
	icon: IconType
	desc: string
}

const IntroTile = (props: IntroTileProps) => {
	const color = useColorModeValue('light.text', 'dark.text')
	const backgroundColor = useColorModeValue('light.container', 'dark.container')
	const borderColor = useColorModeValue('light.border', 'dark.border')
	const tertiary = useColorModeValue('light.tertiary', 'dark.tertiary')

	return (
		<Box
			w={['100%', '32%']}
			p="3% 2.5%"
			my={['8px', '0']}
			bgColor={backgroundColor}
			borderWidth="1px"
			borderColor={borderColor}
			borderRadius="12px"
			textAlign="center"
		>
			<Icon as={props.icon} color={color} fontSize="4xl" />
			<Box as="h3" color={tertiary} fontWeight="bold" fontStyle="italic" py="8px">
				{props.title}
			</Box>
			<Box as="p">{props.desc}</Box>
		</Box>
	)
}

export { Intro, IntroTileSection, IntroTile }
