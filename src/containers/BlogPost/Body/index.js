import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import emoji from 'remark-emoji'
import styles from './Body.module.css'

export const Body = props => {
  return (
    <div className={styles.markdownContainer}>
      <ReactMarkdown plugins={[[emoji, { emoticon: true }]]}>{props.markdown}</ReactMarkdown>
    </div>
  )
}

Body.propTypes = {
  markdown: PropTypes.string.isRequired
}
