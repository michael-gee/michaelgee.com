import { PageHead, PageTypes } from '@/components/PageHead'
import { BlogPost, BlogPostItem } from '@/containers/BlogPost'
import { GetServerSideProps } from 'next'

interface Props {
	post: BlogPostItem | null
}

const BlogPostPage = (props: Props) => {
	const { post } = props

	return post ? (
		<>
			<PageHead
				title={post.title}
				description={post.description}
				type={PageTypes.article}
				url={`https://michaelgee.com/blog/${post.slug}`}
				image={post.coverImageSrc}
			>
				<meta property="twitter:card" content="summary_large_image" />
			</PageHead>

			<BlogPost>
				<BlogPost.Header title={post.title} coverImageSrc={post.coverImageSrc} date={post.date} />

				<BlogPost.Body markdown={post.body} />

				<BlogPost.Footer
					url={post.url}
					reactionsCount={post.reactionsCount}
					commentsCount={post.commentsCount}
				/>
			</BlogPost>
		</>
	) : (
		<>
			<PageHead
				title="Error - Article Not Found"
				description="Error - Article Not Found"
				type={PageTypes.article}
				url="https://michaelgee.com/blog/not-found"
			/>

			<BlogPost>
				<BlogPost.ErrorPage />
			</BlogPost>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const slug = context.params?.slug

	const res = await fetch(`https://dev.to/api/articles/michaelgee/${slug}`, {
		method: 'GET',
		headers: { 'api-key': `${process.env.DEVTO_API_KEY}` }
	})
	const data = await res.json()
	let post = null

	if (data && !data.error)
		post = {
			title: data.title,
			description: data.description,
			body: data['body_markdown'],
			coverImageSrc: data['cover_image'],
			date: new Date(data['published_at']).toDateString(),
			url: data.url,
			slug: data.slug,
			commentsCount: data['comments_count'],
			reactionsCount: data['public_reactions_count']
		}

	return {
		props: { post }
	}
}

export default BlogPostPage
