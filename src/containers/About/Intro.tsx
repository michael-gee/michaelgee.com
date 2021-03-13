import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaCode, FaPencilAlt, FaUniversity } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

// interface Props {}

export const Intro = () => {
	const tileColor = useColorModeValue('primary.light', 'primary.dark')
	const tileBgColor = useColorModeValue('#FFFFFF', '#2E3648')

	return (
		<>
			<Box py="16px">
				I'm am a passionate and self-motivated software developer eager to turn ideas into
				applications. My ambitions include staying on the leading edge of web development focusing
				primarily on building elegant, responsive, and performant user interfaces & experiences
				while using serverless cloud technologies to grow my full-stack development skills. I always
				look to meet new like-minded dev friends or find new learning opportunities & projects to
				rapidly continue improving as a developer.
			</Box>

			<Flex justify="space-between" mb="16px">
				<IntroTile
					title="Developing"
					icon={FaCode}
					desc="I consider myself lucky that I get to wake up and do what I love every day. I see code as a form of art where you can start with a blank canvas and create anything that comes to mind."
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
				<IntroTile
					title="Learning"
					icon={FaUniversity}
					desc="I have a strong passion for continuous learning and collaborating with others to rapidly expand upon my developer journey while staying open-minded to new technologies and ideas."
					color={tileColor}
					bgColor={tileBgColor}
				/>
			</Flex>
		</>
	)
}

interface IntroTileProps {
	title: string
	icon: IconType
	desc: string
	color: string
	bgColor: string
}

const IntroTile = (props: IntroTileProps) => {
	return (
		<Box w="32%" p="3% 2.5%" bgColor={props.bgColor} borderRadius="12px" textAlign="center">
			<Icon as={props.icon} color={props.color} fontSize="4xl" />
			<Box as="h3" fontWeight="bold" fontStyle="italic" py="8px">
				{props.title}
			</Box>
			<Box as="p">{props.desc}</Box>
		</Box>
	)
}
