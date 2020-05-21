import Head from 'next/head'
import { Form, Button, Input, TextArea, Icon } from 'semantic-ui-react'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Michael Gee</title>
        <meta name="description" content="Contact Michael Gee" />
      </Head>

      <main id="page">
        <Nav />

        <Profile />

        <div className="page-body">
          <section>
            <h2 className="page-title">Get In Touch</h2>

            <Form
              method="POST"
              name="Contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              // onSubmit={() => console.log('Submit!')}
              id={styles.form}
            >
              <div id={styles.userInfo}>
                <Input name="name" placeholder="Full Name" icon="user" iconPosition="left" />
                <Input name="email" placeholder="Email Address" icon="at" iconPosition="left" />
              </div>

              <TextArea name="message" placeholder="Your Message" rows="5" />

              <div data-netlify-recaptcha="true" />

              <Button type="submit" id={styles.submitBtn}>
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
      </main>
    </>
  )
}
