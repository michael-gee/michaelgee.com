import { Blog } from '../../containers/Blog'

const BlogPage = ({ posts }) => {
  return (
    <Blog>
      <Blog.Title />

      {posts && posts.length > 0 ? (
        posts.map(item => (
          <Blog.ListItem
            title={item.title}
            description={item.description}
            date={item.published_at}
            image={item.cover_image}
            url={item.url}
            counters={{
              views: item.page_views_count,
              reactions: item.public_reactions_count,
              comments: item.comments_count
            }}
            key={item.id}
          />
        ))
      ) : (
        <div>No blog post items were found. Please refresh the page or try again later.</div>
      )}
    </Blog>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: { 'api-key': process.env.DEVTO_API_KEY }
  })
  const posts = await res.json()

  return { props: { posts } }
}

export default BlogPage
