import { RS_APP_CONTAINERS, RS_NAV_EVENTS } from 'constants/navigation'

export const dispatchNavigateEvent = (routePath, opts) => {
  var event = new CustomEvent(RS_NAV_EVENTS.navigateTo, {
    detail: { path: routePath, opts }
  })
  document.getElementById(RS_APP_CONTAINERS.default).dispatchEvent(event)
}
