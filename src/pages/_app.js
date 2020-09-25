import { Nav } from '../components/Nav'
import { Profile } from '../components/Profile'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = ({ Component, pageProps }) => {
  return (
    <main id="page">
      <Nav />

      <div className="page-body">
        <Profile />

        <Component {...pageProps} />
      </div>

      <div id="bg-back" />
      <div id="bg-front" />
    </main>
  )
}

export default App
