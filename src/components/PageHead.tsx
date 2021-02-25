import Head from 'next/head'

interface Props {
	title: string
	description: string
	url: string
	image?: string
	type?: PageTypes
	children?: React.ReactNode
}

enum PageTypes {
	website = 'website',
	article = 'article'
}

export const PageHead = (props: Props) => {
	const pageType = props.type ? props.type : PageTypes.website

	return (
		<Head>
			<title>{props.title}</title>
			<meta property="title" content={props.title} key="title" />
			<meta name="description" content={props.description} key="description" />
			<meta name="author" content="Michael Gee" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:site_name" content="Michael Gee's Website" />
			<meta property="og:title" content={props.title} key="og:title" />
			<meta property="og:description" content={props.description} key="og:description" />
			<meta property="og:type" content={pageType} key="og:type" />
			<meta property="og:url" content={props.url} key="og:url" />
			{props.image ? <meta property="og:image" content={props.image} key="og:image" /> : undefined}

			<meta property="twitter:title" content={props.title} key="twitter:title" />
			<meta property="twitter:description" content={props.description} key="twitter:description" />
			<meta name="twitter:creator" content="Michael Gee" />
			<meta property="twitter:url" content={props.url} key="twitter:url" />
			{props.image ? (
				<meta property="twitter:image" content={props.image} key="twitter:image" />
			) : undefined}

			{props.children}
		</Head>
	)
}
