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
import { FaUserAlt, FaAt } from 'react-icons/fa'
import { useContactForm } from '@/hooks/useContactForm'

const Form = () => {
	const { onSubmit, onInputChange, isSubmitting, errorMessage } = useContactForm()
	const color = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Box as="form" onSubmit={onSubmit} mt="32px">
			<Flex flexDir={['column', 'row']} my="16px">
				<InputGroup mr={['0', '8px']} mb={['16px', '0']}>
					<InputLeftElement children={<FaUserAlt />} color={color} />
					<Input name="name" onChange={onInputChange} isRequired placeholder="Name" />
				</InputGroup>

				<InputGroup ml={['0', '8px']} mt={['16px', '0']}>
					<InputLeftElement children={<FaAt />} color={color} />
					<Input name="email" onChange={onInputChange} isRequired placeholder="Email" />
				</InputGroup>
			</Flex>

			<Textarea name="message" onChange={onInputChange} isRequired rows={6} placeholder="Message" mt={['16px', '0']} />

			<Input name="_gotcha" display="none" />

			<Flex flexDir={['column', 'column', 'row']} justify="space-between" align="center" mt="24px">
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
					<Box as="span" color="red.500" mt={['16px', '16px', '0']}>
						* {errorMessage}
					</Box>
				)}
			</Flex>
		</Box>
	)
}

export { Form }
