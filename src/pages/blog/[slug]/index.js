import { BlogPost } from '../../../containers/BlogPost'

const BlogPostPage = props => <BlogPost data={props} />

export async function getServerSideProps(context) {
  const slug = context.params.slug

  const res = await fetch(`https://dev.to/api/articles/michaelgee/${slug}`, {
    method: 'GET',
    headers: { 'api-key': process.env.DEVTO_API_KEY }
  })
  const data = await res.json()

  console.log(data)

  return {
    props: {}
  }
}

export default BlogPostPage
