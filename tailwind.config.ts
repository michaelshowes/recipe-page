import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			rose: {
				50: '#FFF7FB',
				800: '#7A284E'
			},
			stone: {
				100: '#F3E5D7',
				150: '#E3DDD7',
				600: '#5F564D',
				900: '#312E2C'
			},
			brown: {
				800: '#854632'
			},
			white: '#FFFFFF'
		},
		fontFamily: {
			body: ['Outfit, sans-serif'],
			heading: ['Young Serif, serif']
		},
		fontSize: {
			base: ['1rem', { lineHeight: '1.5' }],
			lg: ['1.25rem', { lineHeight: '1', fontWeight: '600' }],
			xl: ['1.75rem', { lineHeight: '1' }],
			'2xl': ['2.25rem', { lineHeight: '1' }],
			'3xl': ['2.5rem', { lineHeight: '1' }]
		},
		screens: {
			md: '768px'
		},
		spacing: {
			0: '0',
			100: '8px',
			150: '12px',
			200: '16px',
			300: '24px',
			400: '32px',
			500: '40px',
			600: '48px',
			1600: '128px'
		},
		borderRadius: {
			150: '12px',
			300: '24px'
		},
		extend: {}
	},
	plugins: []
} satisfies Config;
