import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Form, Button, Input, TextArea, Icon } from 'semantic-ui-react'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

import styles from './Contact.module.css'

export const Contact = () => {
  const [fields, setFields] = useState({ name: '', email: '', text: '' })
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      // fetch('/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // })
      //   .then(() => router.push('/success'))
      //   .catch(() => setError('Form was unsuccessfully submitted. Please try again later.'))
      //   .finally(() => setIsSubmitting(false))
    }
  }, [isSubmitting])

  return (
    <>
      <Head>
        <title>Contact | Michael Gee</title>
        <meta name="description" content="Contact Michael Gee" />
      </Head>

      <main id="page">
        <Nav />

        <div className="page-body">
          <Profile />

          <div className="page-content">
            <section>
              <h2 className="page-title">Get In Touch</h2>

              <Form onSubmit={_onSubmit} id={styles.form}>
                <div id={styles.userInfo}>
                  <Input
                    name="name"
                    onChange={_onInputChange}
                    placeholder="Full Name"
                    icon="user"
                    iconPosition="left"
                  />
                  <Input
                    name="email"
                    onChange={_onInputChange}
                    placeholder="Email Address"
                    icon="at"
                    iconPosition="left"
                  />
                </div>

                <TextArea
                  name="text"
                  onChange={_onInputChange}
                  placeholder="Your Message"
                  rows="5"
                />

                {error && (
                  <div id={styles.error}>
                    <Icon name="warning sign" />
                    <span>{error}</span>
                  </div>
                )}

                <Button type="submit" id={styles.submitBtn} disabled={isSubmitting}>
                  <Icon name="send" />
                  Send Message
                </Button>
              </Form>
            </section>

            <section>
              <h2 id={styles.otherTitle}>other ways to contact...</h2>

              <div id={styles.otherContact}>
                <div>
                  <Icon name="at" size="large" />
                  <span>michaelgee221@gmail.com</span>
                </div>

                <div>
                  <Icon name="discord" size="large" />
                  <span>michaelg33#9503</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )

  function _onInputChange(ev, data) {
    setFields({ ...fields, [ev.target.name]: data.value })
  }

  function _onSubmit(ev) {
    ev.preventDefault()

    const { name, email, message } = fields
    const emailRegex = /^\S+@\S+\.\S+$/g

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setError('Please fill all fields before submitting the form.')
      return
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address before submitting the form.')
      return
    }

    setIsSubmitting(true)
  }
}
