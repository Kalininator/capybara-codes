/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#fef0da',
				main: '#f4400d',
				aux1: '#2f2a76',
				aux2: '#3aaab2'
			}
		},
	},
	plugins: [],
}
