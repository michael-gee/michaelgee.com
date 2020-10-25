import { Loader } from 'semantic-ui-react'

import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import delay from 'lodash/delay'

export const PageContent = props => {
  const [renderAfterDelay, setRenderAfterDelay] = useState(false)

  useEffect(() => {
    if (props.isLoading) {
      delay(() => {
        setRenderAfterDelay(true)
      }, 1000)
    }

    return () => {
      setRenderAfterDelay(false)
    }
  }, [props.isLoading])

  return (
    <div className="current-page">
      {!props.isLoading ? (
        props.children
      ) : (
        <div className="page-content">
          {renderAfterDelay && (
            <Loader active size="big">
              Loading...
            </Loader>
          )}
        </div>
      )}
    </div>
  )
}

PageContent.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
