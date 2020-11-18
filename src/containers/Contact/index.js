import { PageHead } from '../../components/PageHead'
import { ContactForm } from './Form'
import { OtherContactMethods } from './Other'

export const Contact = props => {
  return (
    <>
      <PageHead
        title="Contact | Michael Gee"
        description="For more information about Michael Gee please feel free to reach out through the social media links or contact form."
        url="https://www.michaelgee.com/contact"
      />

      <div className="page-content">{props.children}</div>
    </>
  )
}

Contact.ContactForm = ContactForm
Contact.Other = OtherContactMethods
