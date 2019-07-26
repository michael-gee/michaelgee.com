// Implement Suspense/code splitting when react API is more declared and ready

// import { lazy } from 'react'

// export default {
//   Homepage: lazy(() => import('../routes/Homepage')),
//   Counter: lazy(() => import('../routes/Counter'))
// }

import Homepage from './Homepage'
import Counter from './Counter'

export default {
  Homepage,
  Counter
}
