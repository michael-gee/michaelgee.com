import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import theme from '../theme'
import '../index.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	)
}

export default App
