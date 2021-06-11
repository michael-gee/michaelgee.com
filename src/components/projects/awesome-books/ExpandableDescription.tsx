import { Box, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

interface Props {
	fontSize: string
	descPreview: string[] | null
	description: string[]
}

const ExpandableDescription = (props: Props) => {
	const [expanded, setExpanded] = useState<boolean>(false)
	const desc = !expanded && props.descPreview ? props.descPreview : props.description

	return (
		<>
			{desc.map((paragraph: string, index: number) => {
				let className = ''
				if (paragraph.startsWith('<quote>')) {
					paragraph = paragraph.split('<quote>')[1]
					className = 'books-quote'
				}

				return (
					<Box
						as="p"
						p="4px 0"
						fontSize={props.fontSize}
						textAlign={['center', 'center', 'start', 'start']}
						className={className}
						key={index}
					>
						{paragraph}
					</Box>
				)
			})}

			{props.descPreview && (
				<IconButton
					icon={expanded ? <FiChevronsUp /> : <FiChevronsDown />}
					onClick={_toggleDescriptionExpand}
					backgroundColor="transparent"
					aria-label="Expandable Description Toggle Button"
				/>
			)}
		</>
	)

	function _toggleDescriptionExpand() {
		setExpanded((prevState) => !prevState)
	}
}

export { ExpandableDescription }
