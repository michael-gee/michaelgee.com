import { Nav } from '../components/Nav'
import { Profile } from '../components/Profile'
import { PageContent } from '../components/PageContent'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true))
    router.events.on('routeChangeComplete', () => setIsLoading(false))
    router.events.on('routeChangeError', () => setIsLoading(false))
  }, [])

  return (
    <main className="page">
      <Nav />

      <div className="page-body">
        <Profile />

        <PageContent isLoading={isLoading}>
          <Component {...pageProps} />
        </PageContent>
      </div>

      <div className="bg-back" />
      <div className="bg-front" />
    </main>
  )
}

export default App
