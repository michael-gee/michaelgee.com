import constants from '../constants'

export const dispatchNavigateEvent = (routePath, opts) => {
  var event = new CustomEvent(constants.navigation.events.navigateTo, {
    detail: { path: routePath, opts }
  })
  document.getElementById(constants.appContainer).dispatchEvent(event)
}
