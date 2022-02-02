import { Container } from '@/components/Container'
import Link from 'next/link'
import { Box, Button, Link as ChakraLink, Heading, Text } from '@chakra-ui/react'
import { IoMdArrowBack } from 'react-icons/io'

const SubscriptionSuccessPage = () => {
	return (
		<Container>
			<Heading as="h2" textAlign="center" pt="8px">
				Success!
			</Heading>
			<Box fontSize="1.2em" textAlign="center">
				<Text as="p" mt="16px">
					Thank you for subscribing and joining me on my journey 🎉
				</Text>

				<Text as="p">Please check your email inbox for a subsciption confirmation.</Text>
			</Box>

			<Link href="/" passHref>
				<Button as={ChakraLink} display="flex" maxW="200px" m="24px auto" colorScheme="blue">
					<IoMdArrowBack />{' '}
					<Text as="span" pl="8px">
						Return to Site
					</Text>
				</Button>
			</Link>
		</Container>
	)
}

export default SubscriptionSuccessPage
