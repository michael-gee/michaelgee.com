import { Container } from '@/components/Container'
import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import { ErrorPage } from './Error'

interface Props {
	children?: React.ReactNode
}

export interface BlogPostItem {
	title: string
	description: string
	body: string
	coverImageSrc: string
	date: string
	url: string
	slug: string
	commentsCount: number
	reactionsCount: number
	id: string
}

export const BlogPost = (props: Props) => <Container>{props.children}</Container>

BlogPost.Header = Header
BlogPost.Body = Body
BlogPost.Footer = Footer
BlogPost.ErrorPage = ErrorPage
