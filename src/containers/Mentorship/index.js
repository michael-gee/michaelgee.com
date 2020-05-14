import Head from 'next/head'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

export const Mentorship = () => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <div className="page-body">
        <h1>Mentorship</h1>
      </div>
    </main>
  )
}
