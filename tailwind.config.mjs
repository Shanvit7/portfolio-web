/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  keyframes: {
			  "pop-blob": {
			  "0%": { transform: "scale(1)" },
			  "33%": { transform: "scale(1.2)" },
			  "66%": { transform: "scale(0.8)" },
			  "100%": { transform: "scale(1)" },
			},
			colors: {
			 filter: {
			"blur-20": "blur(20px)",
			"blur-25": "blur(25px)",
			 },
			}
		  },
		},
	  },
	  theme: {
		extend: {
		  keyframes: {
			  "pop-blob": {
			  "0%": { transform: "scale(1)" },
			  "33%": { transform: "scale(1.2)" },
			  "66%": { transform: "scale(0.8)" },
			  "100%": { transform: "scale(1)" },
			},
			colors: {
			 filter: {
			"blur-20": "blur(20px)",
			"blur-25": "blur(25px)",
			 },
			}
		  },
		},
	  },
	plugins: [],
}
