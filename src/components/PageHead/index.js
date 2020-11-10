import PropTypes from 'prop-types'
import Head from 'next/head'

export const PageHead = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
    </Head>
  )
}

PageHead.defaultProps = {
  type: 'article'
}

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article'])
}
