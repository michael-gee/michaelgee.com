import styles from './Title.module.css'

export const Title = () => {
  return (
    <div className={`page-title ${styles.title} `}>
      <span>Blog Posts</span>
      <a href="https://dev.to/michaelgee" target="_blank" rel="noopener noreferrer">
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="Michael Gee's DEV Profile"
          height="30"
          width="30"
        />
      </a>
    </div>
  )
}
