import { Box, Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react'
import { FaComment, FaDev, FaInfoCircle, FaHeart } from 'react-icons/fa'

interface Props {
	url: string
	reactionsCount: number
	commentsCount: number
}

export const Footer = (props: Props) => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="footer" my="24px" textAlign="center">
			<Box>
				<Icon as={FaInfoCircle} color={color} mr="8px" mb="4px" />
				This article was originally published on{' '}
				<Link href="https://dev.to/michaelgee" isExternal>
					<Icon as={FaDev} fontSize="1.2em" />
				</Link>
				. To leave a like or participate in the comments, please visit the{' '}
				<Link href={props.url} isExternal>
					original post
				</Link>{' '}
				to provide some much appreciated feedback!
			</Box>

			<Flex align="center" justify="flex-end" mt="8px">
				<Flex as="span" align="center" mr="8px">
					<Icon as={FaHeart} color={color} mx="8px" />
					{props.reactionsCount}
				</Flex>

				<Flex as="span" align="center">
					<Icon as={FaComment} color={color} mx="8px" />
					{props.commentsCount}
				</Flex>
			</Flex>
		</Box>
	)
}
