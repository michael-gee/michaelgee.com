import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi'
import { v4 } from 'uuid'

interface Props {
	fontSize: string
	previewIndex: number | null
	description: string[]
}

const ExpandableDescription = (props: Props) => {
	const { isOpen, onToggle } = useDisclosure()
	const preview = props.previewIndex
		? props.description.slice(0, props.previewIndex + 1)
		: props.description
	const desc = props.previewIndex
		? props.description.slice(props.previewIndex + 1, props.description.length)
		: props.description

	return (
		<>
			{preview
				? preview.map((paragraph: string) => {
						return (
							<Box
								as="p"
								p="4px 0"
								fontSize={props.fontSize}
								textAlign={['center', 'center', 'start']}
								key={v4()}
							>
								{paragraph}
							</Box>
						)
				  })
				: null}

			<Collapse
				in={isOpen}
				animateOpacity
				transition={{ enter: { duration: 0.5 }, exit: { duration: 0.5 } }}
			>
				{desc.map((paragraph: string) => {
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
							textAlign={['center', 'center', 'start']}
							className={className}
							key={v4()}
						>
							{paragraph}
						</Box>
					)
				})}
			</Collapse>

			{props.previewIndex ? (
				<IconButton
					icon={isOpen ? <FiChevronsUp /> : <FiChevronsDown />}
					onClick={onToggle}
					backgroundColor="transparent"
					my="4px"
					aria-label="Expandable Description Toggle Button"
				/>
			) : null}
		</>
	)
}

export { ExpandableDescription }
