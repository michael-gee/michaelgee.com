import ReactMarkdown from 'react-markdown'
// @ts-ignore
import emoji from 'remark-emoji'

import styles from './BlogPost.module.css'

interface Props {
	markdown: string
}

export const Body = (props: Props) => {
	return (
		<article className={styles.markdownContainer}>
			<ReactMarkdown plugins={[[emoji, { emoticon: true }]]}>{props.markdown}</ReactMarkdown>
		</article>
	)
}
