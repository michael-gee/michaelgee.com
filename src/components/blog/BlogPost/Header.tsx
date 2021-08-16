import Image from 'next/image'
import { Heading, Box, useColorModeValue } from '@chakra-ui/react'

interface Props {
	title: string
	coverImageSrc: string
	date: string
}

export const Header = (props: Props) => {
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="header">
			<Heading as="h1" fontSize="3xl" textAlign="center" mt="8px" mb="16px" color={color}>
				{props.title}
			</Heading>

			<Box display="flex" justifyContent="center">
				<Image src={props.coverImageSrc} width={700} height={300} alt={props.title} />
			</Box>

			<Box color={color} textAlign="center" fontStyle="italic" my="8px">
				{props.date}
			</Box>
		</Box>
	)
}
