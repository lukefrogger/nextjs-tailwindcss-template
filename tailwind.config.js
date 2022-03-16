const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: "#04386E",
				},
				highlight: "#FFAC2F",
			},
			fontFamily: {
				sans: ["custom_font", ...fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
