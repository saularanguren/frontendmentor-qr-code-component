/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'slate300': '#D5E1EF',
				'slate900': '#1F314F',
				'slate500': '#68778D',
			},
			boxShadow: {
				'card-shadow': '0 25px 25px 0 rgba(0, 0, 0, 0.0477)',
			},
			fontFamily: {
				'outfit': ['"Outfit"', 'system-ui'],
			},
		},
	},
	plugins: [],
}
