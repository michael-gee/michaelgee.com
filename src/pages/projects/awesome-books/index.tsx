import { SubscriptionForm } from '@/components/projects/awesome-books/SubscriptionForm'
import { AwesomeBook } from '@/components/projects/awesome-books/AwesomeBook'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { Box, Heading } from '@chakra-ui/react'

import { awesomeBooks } from '@/constants/awesome-books'

const AwesomeBooksPage = () => {
	return (
		<>
			<PageHead
				title="awesome-books"
				description="All-time favorite book recommendations from awesome software developers."
				url="https://michaelgee.dev/books"
				image="https://res.cloudinary.com/practicaldev/image/fetch/s--9rj6p71K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ib34btd3n5ywi5ieoyze.jpg"
			/>

			<Container>
				<Box as="header" p="0 16px" pt="16px">
					<Heading
						bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
						bgClip="text"
						fill="transparent"
						textAlign="center"
					>
						awesome-books
					</Heading>
					<Box as="p" maxWidth="800px" m="0 auto" fontSize="1.2em" textAlign="center">
						All-time favorite book recommendations from awesome software developers. Join the
						newsletter! Stay up to date for when new book recommendations are published!
					</Box>
				</Box>

				<SubscriptionForm />

				{awesomeBooks.map((item, index) => {
					return <AwesomeBook isFeatured={index === 0 ? true : false} {...item} key={index} />
				})}
			</Container>
		</>
	)
}

export default AwesomeBooksPage
