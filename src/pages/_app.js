import { Nav } from '../components/Nav'
import { Profile } from '../components/Profile'

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

  // Add loading spinner if isLoading is true

  return (
    <main id="page">
      <Nav />

      <div className="page-body">
        <Profile />

        {!isLoading && <Component {...pageProps} />}
      </div>

      <div id="bg-back" />
      <div id="bg-front" />
    </main>
  )
}

export default App
