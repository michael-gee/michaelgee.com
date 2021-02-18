import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
	<Flex height="100vh" flexDir="column" textAlign="center" mt="40px">
		<Heading fontSize="6vw">{title}</Heading>
		<Heading fontSize="3vw" fontStyle="italic" fontWeight="normal">
			v2 currently under development
		</Heading>
	</Flex>
)

Hero.defaultProps = {
	title: 'michaelgee.com'
}
