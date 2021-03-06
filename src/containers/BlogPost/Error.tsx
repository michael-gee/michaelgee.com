import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'

export const ErrorPage = () => {
	return (
		<Box textAlign="center" py={['16px', '40px']}>
			<Heading as="h1">Error - Blog post was not found.</Heading>

			<Box as="p" my="16px">
				The requested article does not exist or was not loaded properly.
			</Box>

			<Box as="p" my="16px">
				Please try again later or{' '}
				<Link href="/contact">
					<a>Contact Me Here</a>
				</Link>{' '}
				to let me know there is an issue and I will fix it as soon as possible.
			</Box>
		</Box>
	)
}
