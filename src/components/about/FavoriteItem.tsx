import { Box, Flex } from '@chakra-ui/react'

interface Props {
	label: string
	value: string
}

const FavoriteItem = (props: Props) => {
	return (
		<Flex
			justify="space-between"
			flexWrap="wrap"
			borderBottom="1px dashed #a5a9a1"
			lineHeight="2"
			fontSize="xl"
			px="8px"
		>
			<Box as="span" fontWeight="600">
				{props.label}
			</Box>
			<Box as="span" fontWeight="lighter">
				{props.value}
			</Box>
		</Flex>
	)
}

export { FavoriteItem }
export type { Props as FavoriteItemProps }
