import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button, Icon } from 'semantic-ui-react'

import styles from './Nav.module.css'

export const Nav = () => {
  const navButtons = _configureNavButtons()
  const router = useRouter()

  return (
    <header
      id={styles.header}
      style={
        router.pathname === '/mentorship'
          ? { display: 'flex', alignItems: 'flex-start', maxHeight: '100%', paddingTop: 8 }
          : {}
      }
    >
      <nav id={styles.nav}>
        {navButtons.map(btn => (
          <Link href={btn.pathname} key={btn.icon}>
            <Button
              as="a"
              icon
              size="huge"
              id={btn.pathname === router.pathname ? styles.selected : undefined}
              className={styles.navBtn}
            >
              <Icon name={btn.icon} />
              <div>{btn.text}</div>
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  )

  function _configureNavButtons() {
    return [
      {
        icon: 'user',
        text: 'About',
        pathname: '/'
      },
      {
        icon: 'code',
        text: 'Projects',
        pathname: '/projects'
      },
      // {
      //   icon: 'book',
      //   text: 'Blog',
      //   pathname: '/blog'
      // },
      {
        icon: 'university',
        text: 'Mentorship',
        pathname: '/mentorship'
      },
      {
        icon: 'mail',
        text: 'Contact',
        pathname: '/contact'
      }
    ]
  }
}
