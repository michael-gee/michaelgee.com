import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { ListItem } from './ListItem'

interface Props {
	children?: React.ReactNode
}

export interface BlogListItem {
	title: string
	description: string
	date: string
	image: string
	href: string
	id: string
}

export const Blog = (props: Props) => (
	<>
		<PageHead
			title="Michael Gee | Blog"
			description="Michael Gee's personal blog sharing past experiences and cool things he has learned."
			url="https://michaelgee.com/blog"
		/>

		<Container>{props.children}</Container>
	</>
)

Blog.ListItem = ListItem
