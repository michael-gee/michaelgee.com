import { HoverIcon } from '@/components/HoverIcon'
import Image from 'next/image'
import {
	Box,
	Button,
	Heading,
	Flex,
	Link as ChakraLink,
	SlideFade,
	useColorModeValue
} from '@chakra-ui/react'
import * as icons from './icons'

type ProjectIconType = {
	id: string
	name: string
}

interface ProjectProps {
	title: string
	description: string
	image: string
	techIcons: ProjectIconType[]
	projectLink?: string
	sourceCode?: string
}

interface Props extends ProjectProps {
	imagePosition: 'left' | 'right'
}

const ProjectsListItem = (props: Props) => {
	const techIcons: any = icons
	const titleColor = useColorModeValue('light.tertiary', 'dark.tertiary')
	const hasLink = props.projectLink || props.sourceCode
	const flexDir = props.imagePosition === 'right' ? 'row' : 'row-reverse'

	return (
		<Flex pos="relative" flexDir={['column', 'column', flexDir]} justify="space-around" py="16px">
			<SlideFade
				in
				offsetX={props.imagePosition === 'right' ? '-16px' : '16px'}
				offsetY="0"
				transition={{ enter: { duration: 1, delay: 0.3 } }}
			>
				<Box
					w={['80%', '350px', '350px']}
					h={['auto', '350px', '350px']}
					maxW="100%"
					m={['0 auto', '0 auto', '0']}
					borderRadius="16px"
					borderWidth="3px"
					boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
					className="project-image-container"
				>
					<Image
						src={props.image}
						width="400px"
						height="400px"
						alt={props.title}
						layout="responsive"
					/>
				</Box>
			</SlideFade>

			<SlideFade
				in
				offsetX={props.imagePosition === 'right' ? '16px' : '-16px'}
				offsetY="0"
				transition={{ enter: { duration: 1, delay: 0.3 } }}
			>
				<Flex
					w={['78%', '350px', '400px']}
					h={['auto', '200px', '350px']}
					maxW="100%"
					m={['8px auto 24px auto', '8px auto 24px auto', '0']}
					justify="center"
					align="center"
				>
					<Box w="100%">
						<Heading fontSize="1.4em" color={titleColor}>
							{props.title}
						</Heading>

						<Box as="p" fontSize=".8em" py="8px">
							{props.description}
						</Box>

						<Flex mt="4px">
							{props.techIcons.map((icon: ProjectIconType) => {
								const { id, name } = icon

								return (
									<Box mr="16px" key={icon.id}>
										<HoverIcon icon={techIcons[id]} name={name} gutter={12} size="1.4em" />
									</Box>
								)
							})}
						</Flex>

						{hasLink ? (
							<Flex align="center" mt="16px">
								{props.projectLink ? (
									<Button
										as={ChakraLink}
										href={props.projectLink}
										isExternal
										colorScheme="blue"
										mr="16px"
										size="sm"
										textDecoration="none !important"
									>
										View Project
									</Button>
								) : null}
								{props.sourceCode ? (
									<Button
										as={ChakraLink}
										href={props.sourceCode}
										isExternal
										colorScheme="blue"
										size="sm"
										textDecoration="none !important"
									>
										Source Code
									</Button>
								) : null}
							</Flex>
						) : null}
					</Box>
				</Flex>
			</SlideFade>
		</Flex>
	)
}

export { ProjectsListItem as ListItem }
export type { ProjectProps }
