import { Form } from '@/components/contact/Form'
import { PageHead } from '@/components/PageHead'
import { PageTitle } from '@/components/PageTitle'
import { Container } from '@/components/Container'
import { Fade } from '@chakra-ui/react'

const ContactPage = () => (
	<>
		<PageHead
			title="Michael Gee | Contact"
			description="For more information about Michael Gee please feel free to reach out through the social media links or contact form."
			url="https://michaelgee.com/contact"
		/>

		<Container>
			<Fade in transition={{ enter: { duration: 1.2 } }}>
				<PageTitle text="Get In Touch!" borderless />
				<Form />
			</Fade>
		</Container>
	</>
)

export default ContactPage
