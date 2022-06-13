import Image from 'next/image'
import Link from 'next/link'
import {
	Box,
	Flex,
	Heading,
	Link as ChakraLink,
	SlideFade,
	useColorModeValue
} from '@chakra-ui/react'

interface ListItemProps {
	title: string
	description: string
	date: string
	image: string
	href: string
	id: string
	animationDelay?: number
}

const ListItem = (props: ListItemProps) => {
	const titleColor = useColorModeValue('light.link', 'dark.link')
	const backgroundColor = useColorModeValue('light.container', 'dark.container')
	const borderColor = useColorModeValue('light.border', 'dark.border')

	return (
		<SlideFade
			in
			offsetY="40px"
			transition={{ enter: { duration: 1.2, delay: props.animationDelay || 0 } }}
		>
			<Link href={props.href} passHref>
				<Flex
					as={ChakraLink}
					backgroundColor={backgroundColor}
					borderColor={borderColor}
					borderWidth="1px"
					borderRadius="12px"
					flexDir={['column', 'column', 'row']}
					align={['center', 'center', 'flex-start']}
					p="16px"
					my="16px"
					transition=".3s"
					textDecoration="none !important"
					_focus={{
						boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)'
					}}
					_hover={{
						transform: 'translateY(-4px)',
						color: titleColor
					}}
				>
					<Box maxW="400px" maxH="100%" mb={['8px', '8px', '0']}>
						<Image src={props.image} width={400} height={168} alt={props.title} />
					</Box>

					<Box
						as="article"
						fontSize="sm"
						pl={['0', '0', '24px']}
						textAlign={['center', 'center', 'start']}
					>
						<Heading as="h3" fontSize="sm" color={titleColor}>
							{props.title}
						</Heading>
						<Box as="p" py="4px">
							{props.description}
						</Box>
						<Box fontStyle="italic">{props.date}</Box>
					</Box>
				</Flex>
			</Link>
		</SlideFade>
	)
}

export { ListItem }
export type { ListItemProps }
