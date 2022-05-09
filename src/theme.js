import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em'
})

const theme = extendTheme({
	styles: {
		global: (props) => ({
			body: {
				color: mode('gray.700', 'whiteAlpha.900')(props),
				bg: mode('gray.50', '#1C2128')(props)
			}
		})
	},
	// components: {},
	breakpoints,
	colors: {
		dark: {
			background: '#22272D',
			text: 'whiteAlpha.800',
			container: '#22272e',
			border: '#444c56',
			link: '#90cdf4',

			primary: '',
			secondary: '',
			tertiary: '#FFD70F'
		},

		light: {
			background: '#F5F8FA',
			text: 'gray.700',
			container: '#FFFFFF',
			border: '#d0d7de',
			link: '#3182ce',

			primary: '',
			secondary: '',
			tertiary: '#E60067'
		}

		// primary: {
		// 	light: '#3182ce',
		// 	dark: '#90cdf4'
		// }
	}
})

export default theme
