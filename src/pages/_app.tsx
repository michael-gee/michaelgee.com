import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileNav } from '@/components/MobileNav'

import theme from '../theme'
import '../index.css'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Header />

			<Box as="main" pt={['16px', '72px']} pb={['80px', '0']}>
				<Component {...pageProps} />
			</Box>

			<MobileNav />
			<Footer />
		</ChakraProvider>
	)
}

export default App
