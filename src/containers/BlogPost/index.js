import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import { ErrorPage } from './Error'

export const BlogPost = props => {
  return (
    <article style={{ maxWidth: 584, margin: '0 auto', padding: '0 8px' }}>
      {props.children}
    </article>
  )
}

BlogPost.Header = Header
BlogPost.Body = Body
BlogPost.Footer = Footer
BlogPost.ErrorPage = ErrorPage
