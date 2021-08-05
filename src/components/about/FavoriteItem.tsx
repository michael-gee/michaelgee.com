import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

interface Props {
	label: string
	value: string
}

const FavoriteItem = (props: Props) => {
	const borderColor = useColorModeValue('primary.light', 'primary.dark')

	return (
		<Flex
			justify="space-between"
			flexWrap="wrap"
			borderBottomColor={borderColor}
			borderBottomWidth="1px"
			borderBottomStyle="dashed"
			lineHeight="2"
			fontSize="xl"
			px="4px"
		>
			<Box as="span" fontWeight="600" fontStyle="italic">
				{props.label}
			</Box>

			<Box as="span">{props.value}</Box>
		</Flex>
	)
}

export { FavoriteItem }
export type { Props as FavoriteItemProps }
