import Head from 'next/head'
import { Nav } from '../../components/Nav'

export const Blog = props => {
  console.log(props)

  return (
    <>
      <Head>
        <title>Blog | Michael Gee</title>
        <meta
          name="description"
          content="Michael Gee's personal blog sharing past experiences and cool things he has learned."
        />
      </Head>

      <main id="page">
        <Nav />

        <div className="page-body">
          <h1>Blog</h1>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: { 'api-key': '7Xv4TtxJ1oPizeWxx1PC4L11' }
  })
  const data = await res.json()

  console.log(res)
  console.log(data)

  return {
    props: {
      data
    } // will be passed to the page component as props
  }
}
