import { Form } from '@/components/contact/Form'
import { Methods } from '@/components/contact/Methods'
import { PageHead } from '@/components/PageHead'
import { PageTitle } from '@/components/PageTitle'
import { Container } from '@/components/Container'

const ContactPage = () => (
	<>
		<PageHead
			title="Michael Gee | Contact"
			description="For more information about Michael Gee please feel free to reach out through the social media links or contact form."
			url="https://michaelgee.com/contact"
		/>

		<Container>
			<PageTitle title="Get In Touch!" borderless />
			<Form />
			<Methods />
		</Container>
	</>
)

export default ContactPage
