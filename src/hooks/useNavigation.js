import { useMemo } from 'react'

import constants from '../constants'

const useNavigation = () => {
  const navigateTo = (routePath, args) => {
    const event = new CustomEvent(constants.navigation.events.navigateTo, {
      detail: { path: routePath, options: args }
    })

    document.getElementById(constants.appContainer).dispatchEvent(event)
  }

  return useMemo(() => ({ navigateTo }), [])
}

export default useNavigation
