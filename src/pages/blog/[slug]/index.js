import { PageHead } from '../../../components/PageHead'
import { BlogPost } from '../../../containers/BlogPost'

const BlogPostPage = ({ post }) =>
  post ? (
    <>
      <PageHead title={post.title} description={post.description} />
      <BlogPost post={post} />
    </>
  ) : (
    <>
      <PageHead title="404 - Post Not Found" />
      <h1 style={{ textAlign: 'center' }}>404 - Blog post was not found.</h1>
      {/* ErrorComponent */}
    </>
  )

export async function getServerSideProps(context) {
  const slug = context.params.slug

  const res = await fetch(`https://dev.to/api/articles/michaelgee/${slug}`, {
    method: 'GET',
    headers: { 'api-key': process.env.DEVTO_API_KEY }
  })
  const data = await res.json()
  let post = null

  if (data)
    post = {
      title: data.title,
      description: data.description,
      body: data['body_markdown'],
      coverImageSrc: data['cover_image'],
      date: data['published_at'],
      url: data.url,
      commentsCount: data['comments_count'],
      reactionsCount: data['public_reactions_count']
    }

  return {
    props: { post }
  }
}

export default BlogPostPage
