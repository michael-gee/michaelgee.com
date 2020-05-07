const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  env: {},
  pageExtensions: ['js', 'jsx', 'mdx']
})
