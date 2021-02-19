import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import '../index.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
