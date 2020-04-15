import { useState } from 'react'

const useHasChanges = () => {
  const [currentlyHasChanges, setCurrentlyHasChanges] = useState(false)

  return {
    hasChanges: val => {
      if (val !== undefined && val !== null && typeof val === 'boolean') {
        setCurrentlyHasChanges(val)
        return val
      } else {
        return currentlyHasChanges
      }
    }
  }
}

export default useHasChanges
