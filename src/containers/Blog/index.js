import { PageHead } from '../../components/PageHead'
import { Title } from './Title'
import { ListItem } from './ListItem'

export const Blog = props => {
  return (
    <>
      <PageHead
        title="Blog | Michael Gee"
        description="Michael Gee's personal blog sharing past experiences and cool things he has learned."
        url="https://www.michaelgee.com/blog"
      />

      <div className="page-content">{props.children}</div>
    </>
  )
}

Blog.Title = Title
Blog.ListItem = ListItem
