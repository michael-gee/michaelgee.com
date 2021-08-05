import { Box, Collapse, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi'

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
				? preview.map((paragraph: string, index: number) => {
						return (
							<Box
								as="p"
								p="4px 0"
								fontSize={props.fontSize}
								textAlign={['center', 'center', 'start']}
								key={index}
							>
								{paragraph}
							</Box>
						)
				  })
				: null}

			{desc.map((paragraph: string, index: number) => {
				let className = ''
				if (paragraph.startsWith('<quote>')) {
					paragraph = paragraph.split('<quote>')[1]
					className = 'books-quote'
				}

				return (
					<Collapse in={isOpen} animateOpacity>
						<Box
							as="p"
							p="4px 0"
							fontSize={props.fontSize}
							textAlign={['center', 'center', 'start']}
							className={className}
							key={index}
						>
							{paragraph}
						</Box>
					</Collapse>
				)
			})}

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
