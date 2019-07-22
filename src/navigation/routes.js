import { lazy } from 'react'

export default {
  Homepage: lazy(() => import('../routes/Homepage')),
  Counter: lazy(() => import('../routes/Counter'))
}
