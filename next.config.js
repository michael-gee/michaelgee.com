const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
	// when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
	const isDev = phase === PHASE_DEVELOPMENT_SERVER
	// when `next build` or `npm run build` is used
	const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
	// when `next build` or `npm run build` is used
	const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'

	return {
		env: {
			AWESOME_BOOKS_REDIRECT_URL: isDev
				? 'localhost:3000/awesome-books/success'
				: 'https://michaelgee.com/books/success'
		},
		images: {
			domains: ['res.cloudinary.com']
		}
	}
}
