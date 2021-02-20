import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em'
})

const theme = extendTheme({
	colors: {
		black: '#16161D'
	},
	styles: {
		global: (props) => ({
			body: {
				color: mode('gray.700', 'whiteAlpha.900')(props),
				bg: mode('gray.50', 'gray.900')(props)
			}
		})
	},
	// components: {},
	breakpoints
})

export default theme
