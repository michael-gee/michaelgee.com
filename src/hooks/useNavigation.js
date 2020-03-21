import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const useNavigation = () => {
  const [navigation, setNavigation] = useState()
  const history = useHistory()

  useEffect(() => {
    function navigateTo(route, opts) {
      if (opts && opts.replace) {
        delete opts.replace
        history.replace(route, opts)
      } else {
        history.push(route, opts)
      }
    }

    setNavigation({ navigateTo })
  }, [history])

  return { ...navigation }
}

export default useNavigation
