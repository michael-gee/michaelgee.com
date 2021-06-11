import Link from 'next/link'
import { Box, Button, Heading } from '@chakra-ui/react'
import { IoMdArrowBack } from 'react-icons/io'

const AwesomeBooksSuccessPage = () => {
	return (
		<>
			<Box as="header" p="0 16px" pt="16px">
				<Heading
					bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
					bgClip="text"
					fill="transparent"
					textAlign="center"
				>
					awesome-books
				</Heading>
			</Box>

			<Box fontSize="1.2em" textAlign="center">
				<Box as="p" mt="16px">
					Thank you for subscribing and joining me on this reading journey 🎉
				</Box>

				<Box as="p">Please check your email inbox for a subsciption confirmation.</Box>
			</Box>

			<Link href="/awesome-books">
				<Button
					display="flex"
					m="24px auto"
					bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
					color="white"
					_hover={{ opacity: 0.8 }}
				>
					<IoMdArrowBack />{' '}
					<Box as="span" pl="8px">
						Back to awesome-books
					</Box>
				</Button>
			</Link>
		</>
	)
}

export default AwesomeBooksSuccessPage
