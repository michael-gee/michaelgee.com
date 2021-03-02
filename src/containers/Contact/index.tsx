import { PageHead } from '@/components/PageHead'
import { Container } from '@/components/Container'
import { Form } from './Form'
import { OtherContactMethods } from './Other'

interface Props {
	children?: React.ReactNode
}

export const Contact = (props: Props) => (
	<>
		<PageHead
			title="Michael Gee | Contact"
			description="For more information about Michael Gee please feel free to reach out through the social media links or contact form."
			url="https://michaelgee.com/contact"
		/>

		<Container>{props.children}</Container>
	</>
)

Contact.Form = Form
Contact.Other = OtherContactMethods
