import { useHistory } from 'react-router-dom'

const useNavigation = () => {
  const history = useHistory()

  return {
    navigateTo: (route, opts) => {
      if (opts && opts.replace) {
        delete opts.replace
        history.replace(route, opts)
      } else {
        history.push(route, opts)
      }
    }
  }
}

export default useNavigation
