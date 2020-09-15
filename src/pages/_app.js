import 'semantic-ui-css/semantic.min.css'
import './index.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />

      <div id="bg-back" />
      <div id="bg-front" />
    </>
  )
}

export default App
