import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import { Button, Icon, Sidebar as SUISidebar } from 'semantic-ui-react'

import { MG_NAV_PAGES, MG_SOCIAL_MEDIA } from '../../constants'

import styles from './Sidebar.module.css'

export const Sidebar = props => {
  const router = useRouter()

  return (
    <SUISidebar visible={true} onHide={props.onHide} direction="right">
      <div id={styles.sidebarContainer}>
        <Button onClick={props.onHide} id={styles.sidebarCloseBtn}>
          <Icon name="close" />
        </Button>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Pages</h3>
          {MG_NAV_PAGES.map((navItem, index) => {
            return (
              <Link href={navItem.pathname} key={navItem.text}>
                <div
                  className={
                    router.pathname === navItem.pathname
                      ? `${styles.sidebarMenuItem} ${styles.selectedMenuItem}`
                      : styles.sidebarMenuItem
                  }
                  style={
                    index === MG_NAV_PAGES.length - 1 ? { borderBottom: '1px solid #eee' } : {}
                  }
                >
                  {navItem.text}
                </div>
              </Link>
            )
          })}
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Recent Blog Posts</h3>
          <p style={{ textAlign: 'center', fontSize: '1.8em', margin: '8px 0' }}>
            New blog posts coming soon.
          </p>
        </section>

        <section className={styles.sidebarSection}>
          <h3 className={styles.sidebarTitle}>Social</h3>
          {MG_SOCIAL_MEDIA.map((socialItem, index) => {
            return (
              <a
                href={socialItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sidebarMenuItem}
                style={
                  index === MG_SOCIAL_MEDIA.length - 1 ? { borderBottom: '1px solid #eee' } : {}
                }
                key={socialItem.text}
              >
                <Icon name={socialItem.icon} />
                <span className={styles.sidebarMenuItemText}>{socialItem.text}</span>
              </a>
            )
          })}
        </section>
      </div>
    </SUISidebar>
  )
}

Sidebar.propTypes = {
  onHide: PropTypes.func.isRequired
}