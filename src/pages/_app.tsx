import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import theme from '../theme'
import '../index.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Header />
			<Box as="main" pt={['0', '72px']}>
				<Component {...pageProps} />
			</Box>
			<Footer />
		</ChakraProvider>
	)
}

export default App
