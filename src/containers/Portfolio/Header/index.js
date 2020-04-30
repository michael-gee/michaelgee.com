import { Button, Icon } from 'semantic-ui-react'

import styles from './Header.module.css'

export const Header = () => {
  const navButtons = ['Portfolio', 'Blog', 'Contact']

  return (
    <header id={styles.header}>
      <div id={styles.content}>
        <div id={styles.title}>
          <Icon name="code" size="huge" id={styles.codeIcon} />
          <div></div>
          <div></div>
        </div>

        <div>
          {navButtons.map(item => (
            <Button content={item} className={styles.navButton} />
          ))}
        </div>
      </div>
    </header>
  )
}
