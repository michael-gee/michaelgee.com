import { ListItem, ListItemProps } from '@/components/blog/ListItem'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { Box } from '@chakra-ui/react'

interface Props {
	posts: ListItemProps[] | null
}

const BlogPage = (props: Props) => {
	const { posts } = props

	return (
		<>
			<PageHead
				title="Michael Gee | Blog"
				description="Michael Gee's personal blog sharing past experiences and cool things he has learned."
				url="https://michaelgee.com/blog"
			/>

			<Container>
				{posts && posts.length > 0 ? (
					posts.map((item: ListItemProps, index: number) => {
						const animationDelay = index > 0 ? 0.3 * index : 0
						return <ListItem {...item} animationDelay={animationDelay} key={item.id} />
					})
				) : (
					<Box py="24px" textAlign="center">
						No blog post items were found. Please refresh the page or try again later.
					</Box>
				)}
			</Container>
		</>
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
