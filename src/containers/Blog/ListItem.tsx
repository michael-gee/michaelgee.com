import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

import { BlogListItem } from './'

interface Props extends BlogListItem {}

export const ListItem = (props: Props) => (
	<Link href={props.href}>
		<Flex
			as="a"
			py="8px"
			m="16px 24px"
			transition=".3s"
			cursor="pointer"
			flexDir={['column', 'column', 'row']}
			align={['center', 'center', 'flex-start']}
			_hover={{
				transform: 'translateY(-4px)',
				color: useColorModeValue('primary.light', 'primary.dark')
			}}
		>
			<Box maxW="400px" maxH="100%" mb={['8px', '8px', '0']}>
				<Image src={props.image} width={400} height={168} />
			</Box>

			<Box
				as="article"
				fontSize="sm"
				pl={['0', '0', '24px']}
				textAlign={['center', 'center', 'start']}
			>
				<Heading as="h3" fontSize="sm" color={useColorModeValue('primary.light', 'primary.dark')}>
					{props.title}
				</Heading>
				<Box as="p" py="4px">
					{props.description}
				</Box>
				<Box fontStyle="italic">{props.date}</Box>
			</Box>
		</Flex>
	</Link>
)
