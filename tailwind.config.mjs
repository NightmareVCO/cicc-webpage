import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#00589B',
				'secondary': '#E9A900',
				'accent': '#004376',
				'accent-dark': '#001B30',
				},
			backgroundImage: {
				'hero-image': "url('/hero.webp')",
				'hero-gradient': "linear-gradient(110deg, #00589B 20%, #001B3060 100%)",
			},
			flex: {
				'1': '1 1 0%',
				'2': '2 2 0%',
				'3': '3 3 0%',
				'4': '4 4 0%',
				'5': '5 5 0%',
			},

		},
	},
	plugins: [],
}
