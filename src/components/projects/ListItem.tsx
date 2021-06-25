import { HoverIcon } from '@/components/HoverIcon'
import Image from 'next/image'
import { Box, Button, Heading, Flex, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
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

interface Props extends ProjectProps {}

const ProjectsListItem = (props: Props) => {
	const techIcons: any = icons
	const color = useColorModeValue('primary.light', 'primary.dark')
	const detailsBgColor = useColorModeValue('white', 'gray.800')
	const hasLink = props.projectLink || props.sourceCode

	return (
		<Box
			w="100%"
			maxW="600px"
			m="16px auto 32px auto"
			boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
		>
			<Box borderTopLeftRadius="6px" borderTopRightRadius="6px" className="project-image-container">
				<Image src={props.image} width="600px" height="300px" layout="responsive" />
			</Box>

			<Box
				w="100%"
				p="16px"
				bgColor={detailsBgColor}
				borderBottomLeftRadius="6px"
				borderBottomRightRadius="6px"
			>
				<Heading fontSize="1.4em" color={color}>
					{props.title}
				</Heading>

				<Box as="p" fontSize=".8em" py="8px">
					{props.description}
				</Box>

				<Flex mt="4px">
					{props.techIcons.map((icon: ProjectIconType) => {
						const { id, name } = icon

						return (
							<Box mr="16px">
								<HoverIcon icon={techIcons[id]} name={name} gutter={12} size="1.4em" />
							</Box>
						)
					})}
				</Flex>

				{hasLink && (
					<Flex align="center" mt="16px">
						{props.projectLink && (
							<Button
								as={ChakraLink}
								href={props.projectLink}
								isExternal
								colorScheme="blue"
								mr="16px"
								size="sm"
								className="no-text-decoration"
							>
								View Project
							</Button>
						)}
						{props.sourceCode && (
							<Button
								as={ChakraLink}
								href={props.sourceCode}
								isExternal
								colorScheme="blue"
								size="sm"
								className="no-text-decoration"
							>
								Source Code
							</Button>
						)}
					</Flex>
				)}
			</Box>
		</Box>
	)
}

export { ProjectsListItem as ListItem }
export type { ProjectProps }
