import Link from 'next/link'

export const ErrorPage = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ padding: '40px 0 32px 0' }}>Error - Blog post was not found.</h1>
      <p style={{ fontSize: '1.8em' }}>
        The requested article does not exist or was not loaded properly.
      </p>
      <p style={{ fontSize: '1.8em' }}>
        Please try again later or{' '}
        <Link href="/contact">
          <a>Contact Me Here</a>
        </Link>{' '}
        to let me know there is an issue and I will fix it as soon as possible.
      </p>
    </div>
  )
}
