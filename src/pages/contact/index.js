import { Contact } from '../../containers/Contact'

const ContactPage = () => {
  return (
    <Contact>
      <section>
        <h2 className="page-title">Get In Touch</h2>
        <Contact.ContactForm />
      </section>

      <Contact.Other />
    </Contact>
  )
}

export default ContactPage
