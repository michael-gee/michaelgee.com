import { Heading, HeadingProps } from '@chakra-ui/react'

interface Props extends HeadingProps {
	text: string
	borderless?: boolean
}

export const PageTitle = (props: Props) => {
	const { text, borderless, ...styleProps } = props

	return (
		<Heading
			size="lg"
			py="8px"
			fontWeight="normal"
			borderBottomWidth={borderless ? '0' : '2px'}
			{...styleProps}
		>
			{text}
		</Heading>
	)
}
