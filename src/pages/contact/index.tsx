import { Form } from '@/components/contact/Form'
import { Methods } from '@/components/contact/Methods'
import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'

const ContactPage = () => (
	<>
		<PageHead
			title="Michael Gee | Contact"
			description="For more information about Michael Gee please feel free to reach out through the social media links or contact form."
			url="https://michaelgee.com/contact"
		/>

		<Container>
			<Form />
			<Methods />
		</Container>
	</>
)

export default ContactPage
