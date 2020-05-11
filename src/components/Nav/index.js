import React from 'react'
import { useRouter } from 'next/router'

import { Button, Icon } from 'semantic-ui-react'

import styles from './Nav.module.css'

export const Nav = props => {
  const navButtons = _configureNavButtons()
  const router = useRouter()

  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        {navButtons.map(btn => (
          <Button
            icon
            onClick={() => _handleNavChange(btn.pathname)}
            size="huge"
            id={btn.pathname === router.pathname ? styles.selected : undefined}
            className={styles.navBtn}
            key={btn.icon}
          >
            <Icon name={btn.icon} />
            <span>{btn.text}</span>
          </Button>
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
        icon: 'mail',
        text: 'Contact',
        pathname: '/contact'
      }
    ]
  }

  function _handleNavChange(pathname) {
    if (pathname !== router.pathname) router.push(pathname)
  }
}
