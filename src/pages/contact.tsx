import { Contact } from '@/containers/Contact'
import { PageTitle } from '@/components/PageTitle'

const ContactPage = () => (
	<>
		<Contact>
			<PageTitle title="Contact Me" />
			<Contact.Form />
			<Contact.Other />
		</Contact>
	</>
)

export default ContactPage
