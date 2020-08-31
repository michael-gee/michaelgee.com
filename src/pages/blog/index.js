import { Blog } from '../../containers/Blog'

export async function getStaticProps(context) {
  const res = await fetch('https://dev.to/api/articles/me', {
    method: 'GET',
    headers: { 'api-key': '7Xv4TtxJ1oPizeWxx1PC4L11' }
  })
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default props => <Blog data={props.data} />
