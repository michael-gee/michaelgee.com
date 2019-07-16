import constants from '../constants'

export const triggerNavigationChange = (routePath, args) => {
  const event = new CustomEvent(constants.navigation.events.navigateTo, {
    detail: { path: routePath, options: args }
  })

  document.getElementById(constants.appContainer).dispatchEvent(event)
}
