import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={_handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      <div id="bg-back" />
      <div id="bg-front" />
    </>
  )

  function _handleExitComplete() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }
}

export default App
