import { Button, Icon } from 'semantic-ui-react'

import styles from './Header.module.css'

export const Header = () => {
  const navButtons = ['Portfolio', 'Blog', 'Contact']

  return (
    <header id={styles.header}>
      <div id={styles.content}>
        <div id={styles.title}>
          <Icon name="code" size="huge" id={styles.codeIcon} />

          <div id={styles.titleText}>
            <h1>Michael Gee</h1>
            <div id={styles.titleSubText}>Software Developer</div>
          </div>
        </div>

        <div>
          {navButtons.map(item => (
            <Button content={item} className={styles.navButton} key={item} />
          ))}
        </div>
      </div>
    </header>
  )
}
