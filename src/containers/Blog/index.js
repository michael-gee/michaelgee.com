import Head from 'next/head'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

export const Blog = () => {
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

        <Profile />

        <div className="page-body">
          <h1>Blog</h1>
        </div>
      </main>
    </>
  )
}
