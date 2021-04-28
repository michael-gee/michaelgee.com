import Image from 'next/image'
import { Box, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaCode, FaDiscord, FaGolfBall, FaPencilAlt, FaUniversity } from 'react-icons/fa'
import { MdImportantDevices } from 'react-icons/md'
import { IconType } from 'react-icons/lib'

export const HomeIntro = () => {
	const color = useColorModeValue('primary.light', 'primary.dark')
	const tileColor = useColorModeValue('primary.light', 'primary.dark')
	const tileBgColor = useColorModeValue('white', 'gray.800')

	return (
		<Box>
			<Flex align="center" justify="space-around" my="24px">
				<Flex h="240px" flexDir="column" justify="center">
					<Heading as="h1" fontSize="5xl">
						Michael Gee
					</Heading>
					<Heading as="h2" fontSize="2xl" color={color}>
						Software Developer
						{/* Blogger, Freelancer, Enthusiast */}
					</Heading>
				</Flex>

				<Image
					src="/images/homepage/coding.png"
					width="240px"
					height="240px"
					alt="Software Developer Illustration"
				/>
			</Flex>

			<Flex flexDir={['column', 'row']} justify="space-between" mt="32px">
				<IntroTile
					title="Coding"
					icon={FaCode}
					desc="I consider myself lucky that I get to wake up and do what I love every day. I see code as a form of art where you can start with a blank canvas and create anything that comes to mind."
					color={tileColor}
					bgColor={tileBgColor}
				/>
				<IntroTile
					title="Learning"
					icon={FaUniversity}
					desc="I have a strong passion for continuous learning and collaborating with others to rapidly expand upon my developer journey while staying open-minded to new tech and ideas."
					color={tileColor}
					bgColor={tileBgColor}
				/>
				<IntroTile
					title="Blogging"
					icon={FaPencilAlt}
					desc="I am in no way a writer but I like to share my past experiences and cool things I have learned. I hope that some people can benefit from them and even provide valuable feedback."
					color={tileColor}
					bgColor={tileBgColor}
				/>
			</Flex>

			<Flex flexDir={['column', 'row']} justify="space-between" my={['0', '16px']}>
				<IntroTile
					title="Freelancing"
					icon={MdImportantDevices}
					desc=""
					color={tileColor}
					bgColor={tileBgColor}
				/>
				<IntroTile
					title="Moderating"
					icon={FaDiscord}
					desc=""
					color={tileColor}
					bgColor={tileBgColor}
				/>
				<IntroTile
					title="Golfing"
					icon={FaGolfBall}
					desc=""
					color={tileColor}
					bgColor={tileBgColor}
				/>
			</Flex>
		</Box>
	)
}

// ***** IntroTile Child component *****
interface IntroTileProps {
	title: string
	icon: IconType
	desc: string
	color: string
	bgColor: string
}

const IntroTile = (props: IntroTileProps) => {
	return (
		<Box
			w={['100%', '32%']}
			p="3% 2.5%"
			my={['8px', '0']}
			bgColor={props.bgColor}
			borderRadius="12px"
			boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
			textAlign="center"
		>
			<Icon as={props.icon} color={props.color} fontSize="4xl" />
			<Box as="h3" fontWeight="bold" fontStyle="italic" py="8px">
				{props.title}
			</Box>
			<Box as="p">{props.desc}</Box>
		</Box>
	)
}
