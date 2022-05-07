import Head from 'next/head'

interface Props {
	title: string
	description: string
	url: string
	image?: string
	type?: PageTypes
	children?: React.ReactNode
}

export enum PageTypes {
	website = 'website',
	article = 'article'
}

export const PageHead = (props: Props) => {
	const pageType = props.type ? props.type : PageTypes.website
	const pageImage = props.image
		? props.image
		: 'https://res.cloudinary.com/michaelgee/image/upload/v1623239996/michaelgee-banner_vmiduw.jpg'

	return (
		<Head>
			<title>{props.title}</title>
			<meta property="title" content={props.title} key="title" />
			<meta name="description" content={props.description} key="description" />
			<meta name="image" content={pageImage} key="image" />
			<meta name="author" content="Michael Gee" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:site_name" content="Michael Gee's Website" />
			<meta property="og:title" content={props.title} key="og:title" />
			<meta property="og:description" content={props.description} key="og:description" />
			<meta property="og:type" content={pageType} key="og:type" />
			<meta property="og:image" content={pageImage} key="og:image" />
			<meta property="og:url" content={props.url} key="og:url" />

			<meta property="twitter:title" content={props.title} key="twitter:title" />
			<meta property="twitter:description" content={props.description} key="twitter:description" />
			<meta name="twitter:creator" content="@michaelgee_" />
			<meta property="twitter:url" content={props.url} key="twitter:url" />
			<meta property="twitter:image" content={pageImage} key="twitter:image" />
			<meta property="twitter:card" content="summary_large_image" />

			{props.children}
		</Head>
	)
}
