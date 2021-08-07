import {
	Box,
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	useColorModeValue
} from '@chakra-ui/react'
import { FaAt, FaEnvelope, FaUserAlt } from 'react-icons/fa'
import { useContactForm } from '@/hooks/useContactForm'

const Form = () => {
	const { onSubmit, onInputChange, isSubmitting, errorMessage } = useContactForm()
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="form" onSubmit={onSubmit}>
			<InputGroup my="16px">
				<InputLeftElement children={<FaUserAlt />} color={color} />
				<Input name="name" onChange={onInputChange} isRequired placeholder="Name" />
			</InputGroup>

			<InputGroup my="16px">
				<InputLeftElement children={<FaAt />} color={color} />
				<Input name="email" onChange={onInputChange} isRequired placeholder="Email" />
			</InputGroup>

			<InputGroup my="16px">
				<InputLeftElement children={<FaEnvelope />} color={color} />
				<Textarea
					name="message"
					onChange={onInputChange}
					isRequired
					rows={6}
					placeholder="Message"
					pl="40px"
				/>
			</InputGroup>

			<Input name="_gotcha" display="none" />

			<Flex flexDir={['column', 'column', 'row']} justify="space-between" align="center">
				<Button
					type="submit"
					isLoading={isSubmitting}
					loadingText="Sending..."
					colorScheme="blue"
					minW="200px"
				>
					Send Message
				</Button>

				{!isSubmitting && errorMessage ? (
					<Box as="span" color="red.500" mt={['16px', '16px', '0']}>
						* {errorMessage}
					</Box>
				) : null}
			</Flex>
		</Box>
	)
}

export { Form }
