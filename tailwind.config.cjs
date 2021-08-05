const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
	purge: {
		content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
		enabled: IS_PROD,
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
