import { Blog } from '../../containers/Blog'

export async function getStaticProps(context) {
  const res = await fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: { 'api-key': process.env.DEVTO_API_KEY }
  })
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

const BlogContainer = props => <Blog data={props.data} />

export default BlogContainer
