import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Button, Icon, Image, Sidebar } from 'semantic-ui-react'

import styles from './Nav.module.css'

export const Nav = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const router = useRouter()
  const navButtons = _configureNavButtons()

  return (
    <header
      id={styles.header}
      style={
        router.pathname === '/mentorship'
          ? { display: 'flex', alignItems: 'flex-start', maxHeight: '100%', paddingTop: 8 }
          : {}
      }
    >
      <nav>
        <div id={styles.nav}>
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
        </div>

        <div id={styles.mobileNav}>
          <div id={styles.mobileNavContent}>
            <Image
              src="/images/mg-transparent-logo.png"
              alt="Michael Gee logo image"
              id={styles.mobileImg}
            />

            <div>
              <h1 id={styles.mobileTitle}>Michael Gee</h1>
              <h2 id={styles.mobileSubtitle}>Software Developer</h2>
            </div>
          </div>

          <Button onClick={_toggleSidebar} icon id={styles.menuBtn}>
            <Icon name="bars" />
          </Button>
        </div>

        {sidebarIsOpen && (
          <Sidebar visible={sidebarIsOpen} onHide={_toggleSidebar} width="wide" direction="right">
            <div>test</div>
          </Sidebar>
        )}
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

  function _toggleSidebar() {
    setSidebarIsOpen(!sidebarIsOpen)
  }
}
