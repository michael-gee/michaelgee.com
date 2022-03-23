import { PageHead } from '@/components/PageHead'
import { PageContent } from '@/components/PageContent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileNav } from '@/components/MobileNav'
import { Box, ChakraProvider } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import theme from '../theme'
import '../index.css'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeStart', () => setIsLoading(true))
		router.events.on('routeChangeComplete', () => setIsLoading(false))
		router.events.on('routeChangeError', () => setIsLoading(false))
	}, [router.events])

	return (
		<>
			<PageHead
				title="Michael Gee"
				description="Michael Gee is a full-stack software developer eager to learn, share, and teach web development along with turning ideas into applications."
				url="https://michaelgee.com"
			/>

			<ChakraProvider resetCSS theme={theme}>
				<Header />

				<Box as="main" pt={['0', '72px']} pb={['80px', '0']}>
					<PageContent isLoading={isLoading}>
						<Component {...pageProps} />
						<Footer />
					</PageContent>
				</Box>

				<MobileNav />
			</ChakraProvider>
		</>
	)
}

export default App
