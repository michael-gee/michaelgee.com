import React from 'react'
import { useRouter } from 'next/router'

export const Nav = props => {
  const router = useRouter()

  return (
    <header>
      <nav>
        <button onClick={() => _handleNavChange('/')}>About Me</button>

        <button onClick={() => _handleNavChange('/contact')}>Contact</button>
      </nav>
    </header>
  )

  function _handleNavChange(pathname) {
    if (pathname !== router.pathname) router.push(pathname)
  }
}
