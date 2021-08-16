import { Badge, Box, Flex, useColorModeValue } from '@chakra-ui/react'

interface Props {
	label: string
	value: string
}

const FavoriteItem = (props: Props) => {
	const backgroundColor = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			flexDir="column"
			align="center"
			w={['calc(50% - 8px)', 'calc(25% - 8px)']}
			bgColor={backgroundColor}
			m="4px"
			p="16px"
			borderRadius="8px"
			textAlign="center"
			boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
		>
			<Box as="dd" fontWeight="bold" pb="6px">
				{props.value}
			</Box>

			<Badge
				as="dt"
				colorScheme="blue"
				px="8px"
				fontSize="sm"
				textTransform="capitalize"
				fontWeight="500"
			>
				{props.label}
			</Badge>
		</Flex>
	)
}

export { FavoriteItem }
export type { Props as FavoriteItemProps }
