/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "#646cff",
				secondary: "#a5b1ff",
				accent: "#ffde59",
				light: "#F9FAFB",
				dark: "#121212",
			},
			fontFamily: {
				display: ["Poppins", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: 0, transform: "translateY(20px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				fadeInUp: "fadeInUp 0.6s ease-out forwards",
			},
		},
	},
	plugins: [],
};
