import { useEffect, useState, useReducer, useRef } from 'react'

const useApi = (apiFunc, { initialApiFuncArgs = {}, onMount = false, initialData = undefined } = {}) => {
  const [apiConfig, setApiConfig] = useState(_getApiState(apiFunc, initialApiFuncArgs))
  const [state, dispatch] = useReducer(_apiReducer, {
    isLoading: false,
    hasError: false,
    data: initialData
  })
  const canFetchRef = useRef(onMount)
  const prevIsLoading = _usePrevious(state.isLoading)

  useEffect(() => {
    let cancel = false

    if (!canFetchRef.current) {
      canFetchRef.current = true
      return
    }

    _invocationHandler(apiConfig.func, apiConfig.args, dispatch, cancel)
    return () => {
      cancel = true
    }
  }, [apiConfig])

  const recall = () => setApiConfig(prev => _getApiState(prev.func, { ...prev.args }))
  const invoke = apiFuncArgs => setApiConfig(prev => _getApiState(prev.func, { ...apiFuncArgs }))
  const wasLoading = !state.isLoading && prevIsLoading === true
  const isSuccess = wasLoading ? !state.hasError : undefined

  return { ...state, args: apiConfig.args, invoke, recall, isSuccess }
}

function _getApiState(apiFunc, apiArgs) {
  return { func: apiFunc, args: apiArgs, name: apiFunc.toString() }
}

function _apiReducer(state, action) {
  switch (action.type) {
    case 'API_INIT':
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    case 'API_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: action.payload
      }
    case 'API_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      }
    default:
      throw new Error()
  }
}

function _usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

async function _invocationHandler(api, apiArgs, dispatch, cancel) {
  dispatch({ type: 'API_INIT' })
  try {
    const result = await api(apiArgs)

    if (!cancel) {
      dispatch({ type: 'API_SUCCESS', payload: result })
    }
  } catch (error) {
    console.error(error)
    if (!cancel) {
      dispatch({ type: 'API_FAILURE', payload: error })
    }
  }
}

export default useApi
