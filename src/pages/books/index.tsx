import { Book, BookProps } from '@/components/books/Book'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

import data from '@/db/books.json'

const BooksPage = () => {
	const { books } = data

	return (
		<>
			<PageHead
				title="Michael Gee | Books"
				description="All-time favorite book recommendations from awesome software developers."
				url="https://michaelgee.com/books"
				image="https://res.cloudinary.com/practicaldev/image/fetch/s--9rj6p71K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ib34btd3n5ywi5ieoyze.jpg"
			/>

			<Container>
				{books.map((item: BookProps, index: number) => {
					return <Book isFeatured={index === 0 ? true : false} {...item} key={index} />
				})}
			</Container>
		</>
	)
}

export default BooksPage
