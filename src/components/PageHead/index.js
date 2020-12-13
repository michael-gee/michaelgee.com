import PropTypes from 'prop-types'
import Head from 'next/head'

export const PageHead = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="author" content="Michael Gee" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content={props.type} />
      <meta property="og:url" content={props.url} />
      {props.image ? <meta property="og:image" content={props.image} /> : undefined}

      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta name="twitter:creator" content="Michael Gee" />
      <meta property="twitter:url" content={props.url} />
      {props.image ? <meta property="twitter:image" content={props.image} /> : undefined}

      {props.children}
    </Head>
  )
}

PageHead.defaultProps = {
  type: 'website'
}

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article'])
}
