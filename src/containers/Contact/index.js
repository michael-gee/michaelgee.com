import { Form, Button, Input, TextArea, Icon } from 'semantic-ui-react'
import { Profile } from '../../components/Profile'
import { Nav } from '../../components/Nav'

import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <main id="page">
      <Nav />

      <Profile />

      <div className="page-body">
        <section>
          <h2 className="page-title">Get In Touch</h2>

          <Form id={styles.form}>
            <div id={styles.userInfo}>
              <Input placeholder="Full Name" icon="user" iconPosition="left" />

              <Input placeholder="Email Address" icon="at" iconPosition="left" />
            </div>

            <TextArea placeholder="Your Message" rows="5" />

            <Button id={styles.submitBtn}>
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
  )
}
