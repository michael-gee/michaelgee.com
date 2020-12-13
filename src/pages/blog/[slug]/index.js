import { PageHead } from '../../../components/PageHead'
import { BlogPost } from '../../../containers/BlogPost'

const BlogPostPage = ({ post }) =>
  post ? (
    <>
      <PageHead
        title={post.title}
        description={post.description}
        type="article"
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
        type="article"
        url={`https://michaelgee.com/blog`}
      />

      <BlogPost>
        <BlogPost.ErrorPage />
      </BlogPost>
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

  if (data && !data.error)
    post = {
      title: data.title,
      description: data.description,
      body: data['body_markdown'],
      coverImageSrc: data['cover_image'],
      date: data['published_at'],
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
