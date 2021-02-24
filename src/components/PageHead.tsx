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
			<meta property="title" content={props.title} />
			<meta name="description" content={props.description} />
			<meta name="author" content="Michael Gee" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:site_name" content="Michael Gee's Website" />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta property="og:type" content={pageType} />
			<meta property="og:url" content={props.url} />
			{props.image ? <meta property="og:image" content={props.image} /> : undefined}

			<meta property="twitter:title" content={props.title} />
			<meta property="twitter:description" content={props.description} />
			<meta name="twitter:creator" content="Michael Gee" />
			<meta property="twitter:url" content={props.url} />
			{props.image ? <meta property="twitter:image" content={props.image} /> : undefined}

			{props.children}
		</Head>
	)
}
