const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
})

module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'mdx'],
	images: {
		domains: ['res.cloudinary.com']
	}
})
