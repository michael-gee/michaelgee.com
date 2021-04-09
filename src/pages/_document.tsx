import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<ColorModeScript initialColorMode="dark" />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
