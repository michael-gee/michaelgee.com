import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'
import { FaUserAlt, FaAt } from 'react-icons/fa'
import { useContactForm } from './useContactForm'

export const Form = () => {
	const { onSubmit, onInputChange, isSubmitting, errorMessage } = useContactForm()

	return (
		<Box as="form" onSubmit={onSubmit}>
			<Flex my="16px">
				<InputGroup mr="8px">
					<InputLeftElement children={<FaUserAlt />} />
					<Input name="name" onChange={onInputChange} isRequired placeholder="Name" />
				</InputGroup>

				<InputGroup ml="8px">
					<InputLeftElement children={<FaAt />} />
					<Input name="email" onChange={onInputChange} isRequired placeholder="Email" />
				</InputGroup>
			</Flex>

			<Textarea name="message" onChange={onInputChange} isRequired placeholder="Message" />

			<Input name="_gotcha" display="none" />

			<Flex justify="space-between" align="center" mt="16px">
				<Button
					type="submit"
					isLoading={isSubmitting}
					loadingText="Sending..."
					colorScheme="blue"
					minW="200px"
				>
					Send Message
				</Button>

				{!isSubmitting && errorMessage && (
					<Box as="span" color="red.500">
						* {errorMessage}
					</Box>
				)}
			</Flex>
		</Box>
	)
}
