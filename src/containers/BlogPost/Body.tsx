import ReactMarkdown from 'react-markdown'
// @ts-ignore
import emoji from 'remark-emoji'

interface Props {
	markdown: string
}

export const Body = (props: Props) => {
	return (
		<article>
			<ReactMarkdown plugins={[[emoji, { emoticon: true }]]}>{props.markdown}</ReactMarkdown>
		</article>
	)
}
