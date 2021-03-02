import { Blog, BlogListItem } from '@/containers/Blog'
import { PageTitle } from '@/components/PageTitle'
import { Box, Icon, Link } from '@chakra-ui/react'
import { FaDev } from 'react-icons/fa'

interface Props {
	posts: BlogListItem[] | null
}

const BlogPage = (props: Props) => {
	const { posts } = props

	return (
		<Blog>
			<PageTitle title="Blog">
				<Link href="https://dev.to/michaelgee" isExternal mr="6px" _focus={{}}>
					<Icon as={FaDev} fontSize="2em" />
				</Link>
			</PageTitle>

			{posts && posts.length > 0 ? (
				posts.map((item: BlogListItem) => <Blog.ListItem {...item} key={item.id} />)
			) : (
				<Box py="24px" textAlign="center">
					No blog post items were found. Please refresh the page or try again later.
				</Box>
			)}
		</Blog>
	)
}

export async function getServerSideProps() {
	const res = await fetch('https://dev.to/api/articles/me', {
		method: 'GET',
		headers: { 'api-key': `${process.env.DEVTO_API_KEY}` }
	})
	let posts = await res.json()

	if (posts && posts.length > 0) {
		posts = posts.map((post: any) => {
			return {
				title: post.title,
				description: post.description,
				date: new Date(post['published_at']).toDateString(),
				image: post['cover_image'],
				href: `/blog/${post.slug}`,
				id: post.id
			}
		})
	} else {
		posts = null
	}

	return { props: { posts } }
}

export default BlogPage
